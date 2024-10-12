# coding: utf-8

"""
    GraphHopper Directions API

     With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation, route optimization, isochrone calculations and other tools in your application.  The GraphHopper Directions API consists of the following RESTful web services:   * [Routing API](#tag/Routing-API),  * [Route Optimization API](#tag/Route-Optimization-API),  * [Isochrone API](#tag/Isochrone-API),  * [Map Matching API](#tag/Map-Matching-API),  * [Matrix API](#tag/Matrix-API),  * [Geocoding API](#tag/Geocoding-API) and  * [Cluster API](#tag/Cluster-API).  # Explore our APIs  ## Get started  1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025) 2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)  Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.  In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.  ## Insomnia  To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:  1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `\"api_key\": your API key` 3. Start exploring  ![Insomnia](./img/insomnia.png)  ## Postman  To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:  1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json). 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `\"api_key\": your API key` 3. Start exploring  ![Postman](./img/postman.png)  ## API Client Libraries  To speed up development and make coding easier, we offer the following client libraries:   * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)  * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API  ### Bandwidth reduction  If you create your own client, make sure it supports http/2 and gzipped responses for best speed.  If you use the Matrix, the Route Optimization API or the Cluster API and want to solve large problems, we recommend you to reduce bandwidth by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4) and specifying the header as follows: `Content-Encoding: gzip`. This will also avoid the HTTP 413 error \"Request Entity Too Large\".  ## Contact Us  If you have problems or questions, please read the following information:  - [FAQ](https://graphhopper.com/api/1/docs/FAQ/) - [Public forum](https://discuss.graphhopper.com/c/directions-api) - [Contact us](https://www.graphhopper.com/contact-form/) - [GraphHopper Status Page](https://status.graphhopper.com/)  To stay informed about the latest developments, you can  - follow us on [twitter](https://twitter.com/graphhopper/), - read [our blog](https://graphhopper.com/blog/), - watch [our documentation repository](https://github.com/graphhopper/directions-api-doc), - sign up for our newsletter or - [our forum](https://discuss.graphhopper.com/c/directions-api).  Select the channel you like the most.   # Map Data and Routing Profiles  Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers. This chapter gives an overview about the options you have.  ## OpenStreetMap  #### Geographical Coverage  [OpenStreetMap](https://www.openstreetmap.org) covers the whole world. If you want to see for yourself if we can provide data suitable for your region, please visit [GraphHopper Maps](https://graphhopper.com/maps/). You can edit and modify OpenStreetMap data if you find that important information is missing, e.g. a weight limit for a bridge. [Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner's guide that shows how to add data. If you have edited data, we usually consider your data after 1 week at the latest.  #### Supported Vehicle Profiles  The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png) scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png) foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png) hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png) bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png) mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png) racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)  Please note:   * all motor vehicles (`car`, `small_truck`, `truck` and `scooter`) support turn restrictions via `turn_costs=true`  * the free package supports only the vehicle profiles `car`, `bike` or `foot`  * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.  * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).  * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.   ## TomTom  If you want to include traffic, you can purchase the TomTom Add-on. This Add-on only uses TomTom's road network and historical traffic information. Live traffic is not yet considered. If you are interested to learn how we consider traffic information, we recommend that you read [this article](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).  Please note the following:   * Currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).  * In addition to our terms, you need to accept TomTom's [End User License Aggreement](https://www.graphhopper.com/tomtom-end-user-license-agreement/).  * We do *not* use TomTom's web services. We only use their data with our software.   [Contact us](https://www.graphhopper.com/contact-form/) for more details.  #### Geographical Coverage  We offer  - Europe including Russia - North, Central and South America - Saudi Arabia - United Arab Emirates - South Africa - Australia  #### Supported Vehicle Profiles  Name       | Description           | Restrictions              | Icon -----------|:----------------------|:--------------------------|:--------------------------------------------------------- car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png) small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png) 

    The version of the OpenAPI document: 1.0.0
    Contact: support@graphhopper.com
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictBool, StrictInt, StrictStr
from typing import Optional
from typing_extensions import Annotated
from openapi_client.models.geocoding_response import GeocodingResponse

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class GeocodingAPIApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def get_geocode(
        self,
        q: Annotated[Optional[StrictStr], Field(description="If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.")] = None,
        locale: Annotated[Optional[StrictStr], Field(description="Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.")] = None,
        limit: Annotated[Optional[StrictInt], Field(description="Specify the maximum number of results to return")] = None,
        reverse: Annotated[Optional[StrictBool], Field(description="It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.")] = None,
        debug: Annotated[Optional[StrictBool], Field(description="If `true`, the output will be formatted.")] = None,
        point: Annotated[Optional[StrictStr], Field(description="_Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.")] = None,
        provider: Annotated[Optional[StrictStr], Field(description="The provider parameter is currently under development and can fall back to `default` at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers. To try it append the `provider`parameter to the URL like `&provider=nominatim`, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \"forward\" geocoding and reverse geocoding via `reverse=true`.  #### Default (`provider=default`)  This provider returns results of our internal geocoding engine, as described above. In addition to the above documented parameters the following parameters are possible: * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.  #### Nominatim (`provider=nominatim`)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.  #### Gisgraphy (`provider=gisgraphy`)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * `radius` - radius in meters * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.  #### NetToolKit (`provider=nettoolkit`)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details): - `source`: User can choose which source provider to geocode the address, this value is \"NetToolKit\" by default - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (`provider=opencagedata`)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.  * bounds - the expected format is `minLon,minLat,maxLon,maxLat` ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> GeocodingResponse:
        """Geocoding Endpoint

         ### Introduction  ![Geocoding Example](./img/geocoding-example.png)  _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`). For example the conversion from `Berlin` to `52.5170365,13.3888599`.  _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding). 

        :param q: If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.
        :type q: str
        :param locale: Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.
        :type locale: str
        :param limit: Specify the maximum number of results to return
        :type limit: int
        :param reverse: It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.
        :type reverse: bool
        :param debug: If `true`, the output will be formatted.
        :type debug: bool
        :param point: _Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
        :type point: str
        :param provider: The provider parameter is currently under development and can fall back to `default` at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers. To try it append the `provider`parameter to the URL like `&provider=nominatim`, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \"forward\" geocoding and reverse geocoding via `reverse=true`.  #### Default (`provider=default`)  This provider returns results of our internal geocoding engine, as described above. In addition to the above documented parameters the following parameters are possible: * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.  #### Nominatim (`provider=nominatim`)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.  #### Gisgraphy (`provider=gisgraphy`)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * `radius` - radius in meters * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.  #### NetToolKit (`provider=nettoolkit`)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details): - `source`: User can choose which source provider to geocode the address, this value is \"NetToolKit\" by default - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (`provider=opencagedata`)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.  * bounds - the expected format is `minLon,minLat,maxLon,maxLat` 
        :type provider: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_geocode_serialize(
            q=q,
            locale=locale,
            limit=limit,
            reverse=reverse,
            debug=debug,
            point=point,
            provider=provider,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GeocodingResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        ).data


    @validate_call
    def get_geocode_with_http_info(
        self,
        q: Annotated[Optional[StrictStr], Field(description="If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.")] = None,
        locale: Annotated[Optional[StrictStr], Field(description="Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.")] = None,
        limit: Annotated[Optional[StrictInt], Field(description="Specify the maximum number of results to return")] = None,
        reverse: Annotated[Optional[StrictBool], Field(description="It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.")] = None,
        debug: Annotated[Optional[StrictBool], Field(description="If `true`, the output will be formatted.")] = None,
        point: Annotated[Optional[StrictStr], Field(description="_Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.")] = None,
        provider: Annotated[Optional[StrictStr], Field(description="The provider parameter is currently under development and can fall back to `default` at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers. To try it append the `provider`parameter to the URL like `&provider=nominatim`, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \"forward\" geocoding and reverse geocoding via `reverse=true`.  #### Default (`provider=default`)  This provider returns results of our internal geocoding engine, as described above. In addition to the above documented parameters the following parameters are possible: * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.  #### Nominatim (`provider=nominatim`)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.  #### Gisgraphy (`provider=gisgraphy`)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * `radius` - radius in meters * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.  #### NetToolKit (`provider=nettoolkit`)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details): - `source`: User can choose which source provider to geocode the address, this value is \"NetToolKit\" by default - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (`provider=opencagedata`)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.  * bounds - the expected format is `minLon,minLat,maxLon,maxLat` ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> ApiResponse[GeocodingResponse]:
        """Geocoding Endpoint

         ### Introduction  ![Geocoding Example](./img/geocoding-example.png)  _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`). For example the conversion from `Berlin` to `52.5170365,13.3888599`.  _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding). 

        :param q: If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.
        :type q: str
        :param locale: Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.
        :type locale: str
        :param limit: Specify the maximum number of results to return
        :type limit: int
        :param reverse: It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.
        :type reverse: bool
        :param debug: If `true`, the output will be formatted.
        :type debug: bool
        :param point: _Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
        :type point: str
        :param provider: The provider parameter is currently under development and can fall back to `default` at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers. To try it append the `provider`parameter to the URL like `&provider=nominatim`, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \"forward\" geocoding and reverse geocoding via `reverse=true`.  #### Default (`provider=default`)  This provider returns results of our internal geocoding engine, as described above. In addition to the above documented parameters the following parameters are possible: * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.  #### Nominatim (`provider=nominatim`)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.  #### Gisgraphy (`provider=gisgraphy`)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * `radius` - radius in meters * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.  #### NetToolKit (`provider=nettoolkit`)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details): - `source`: User can choose which source provider to geocode the address, this value is \"NetToolKit\" by default - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (`provider=opencagedata`)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.  * bounds - the expected format is `minLon,minLat,maxLon,maxLat` 
        :type provider: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_geocode_serialize(
            q=q,
            locale=locale,
            limit=limit,
            reverse=reverse,
            debug=debug,
            point=point,
            provider=provider,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GeocodingResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        response_data.read()
        return self.api_client.response_deserialize(
            response_data=response_data,
            response_types_map=_response_types_map,
        )


    @validate_call
    def get_geocode_without_preload_content(
        self,
        q: Annotated[Optional[StrictStr], Field(description="If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.")] = None,
        locale: Annotated[Optional[StrictStr], Field(description="Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.")] = None,
        limit: Annotated[Optional[StrictInt], Field(description="Specify the maximum number of results to return")] = None,
        reverse: Annotated[Optional[StrictBool], Field(description="It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.")] = None,
        debug: Annotated[Optional[StrictBool], Field(description="If `true`, the output will be formatted.")] = None,
        point: Annotated[Optional[StrictStr], Field(description="_Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.")] = None,
        provider: Annotated[Optional[StrictStr], Field(description="The provider parameter is currently under development and can fall back to `default` at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers. To try it append the `provider`parameter to the URL like `&provider=nominatim`, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \"forward\" geocoding and reverse geocoding via `reverse=true`.  #### Default (`provider=default`)  This provider returns results of our internal geocoding engine, as described above. In addition to the above documented parameters the following parameters are possible: * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.  #### Nominatim (`provider=nominatim`)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.  #### Gisgraphy (`provider=gisgraphy`)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * `radius` - radius in meters * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.  #### NetToolKit (`provider=nettoolkit`)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details): - `source`: User can choose which source provider to geocode the address, this value is \"NetToolKit\" by default - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (`provider=opencagedata`)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.  * bounds - the expected format is `minLon,minLat,maxLon,maxLat` ")] = None,
        _request_timeout: Union[
            None,
            Annotated[StrictFloat, Field(gt=0)],
            Tuple[
                Annotated[StrictFloat, Field(gt=0)],
                Annotated[StrictFloat, Field(gt=0)]
            ]
        ] = None,
        _request_auth: Optional[Dict[StrictStr, Any]] = None,
        _content_type: Optional[StrictStr] = None,
        _headers: Optional[Dict[StrictStr, Any]] = None,
        _host_index: Annotated[StrictInt, Field(ge=0, le=0)] = 0,
    ) -> RESTResponseType:
        """Geocoding Endpoint

         ### Introduction  ![Geocoding Example](./img/geocoding-example.png)  _Geocoding_ describes the process of transforming an textual address representation to a coordinate (`latitude,longitude`). For example the conversion from `Berlin` to `52.5170365,13.3888599`.  _Reverse geocoding_ converts a coordinate to a textual address representation or place name. Find out more about Geocoding itself on [Wikipedia](http://en.wikipedia.org/wiki/Geocoding). 

        :param q: If you do forward geocoding, this is `required` and is a textual description of the address you are looking for.
        :type q: str
        :param locale: Display the search results for the specified locale. Currently French (fr), English (en), German (de) and Italian (it) are supported. If the locale wasn't found the default (en) is used.
        :type locale: str
        :param limit: Specify the maximum number of results to return
        :type limit: int
        :param reverse: It is `required` to be `true` if you want to do a reverse geocoding request. If it is `true`, `point` must be defined as well, and `q` must not be used.
        :type reverse: bool
        :param debug: If `true`, the output will be formatted.
        :type debug: bool
        :param point: _Forward geocoding_: The location bias in the format 'latitude,longitude' e.g. point=45.93272,11.58803. _Reverse geocoding_: The location to find amenities, cities.
        :type point: str
        :param provider: The provider parameter is currently under development and can fall back to `default` at any time. The intend is to provide alternatives to our default geocoder. Each provider has its own strenghts and might fit better for certain scenarios, so it's worth to compare the different providers. To try it append the `provider`parameter to the URL like `&provider=nominatim`, the result structure should be identical in all cases - if not, please report this back to us. Keep in mind that some providers do not support certain parameters or don't return some fields, for example `osm_id` and `osm_type` are not supported by every geocoding provider. If you would like to use additional parameters of one of the providers, but it's not available for the GraphHopper Geocoding API, yet? Please contact us.  The credit costs can be different for all providers - see [here](https://support.graphhopper.com/support/solutions/articles/44000718211-what-is-one-credit-) for more information about it.  Currently, only the default provider and gisgraphy supports autocompletion of partial search strings.  All providers support normal \"forward\" geocoding and reverse geocoding via `reverse=true`.  #### Default (`provider=default`)  This provider returns results of our internal geocoding engine, as described above. In addition to the above documented parameters the following parameters are possible: * `bbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `osm_tag` - you can filter `key:value` or exclude places with certain OpenStreetMap tags `!key:value`. E.g. `osm_tag=tourism:museum` or just the key `osm_tag=tourism`. To exclude multiple tags you add multiple `osm_tag` parameters.  #### Nominatim (`provider=nominatim`)  The GraphHopper Directions API uses a commercially hosted Nominatim geocoder. You can try this provider [here](https://nominatim.openstreetmap.org/). The provider does **not** fall under the [restrictions](https://operations.osmfoundation.org/policies/nominatim/) of the Nominatim instance hosted by OpenStreetMap.  In addition to the above documented parameters Nominatim allows to use the following parameters, which can be used as documented [here](https://github.com/openstreetmap/Nominatim/blob/master/docs/api/Search.md#parameters):  * `viewbox` - the expected format is `minLon,minLat,maxLon,maxLat` * `bounded` - If 1 and a viewbox is given, restrict the result to items contained within that viewbox. Default is 0.  #### Gisgraphy (`provider=gisgraphy`)  This provider returns results from the Gisgraphy geocoder which you can try [here](https://services.gisgraphy.com/static/leaflet/index.html).  **Limitations:** The `locale` parameter is not supported. Gisgraphy does not return OSM tags or an extent.  Gisgraphy has a special autocomplete API, which you can use by adding `autocomplete=true` (does not work with `reverse=true`). The autocomplete API is optimized on predicting text input, but returns less information.  In addition to the above documented parameters Gisgraphy allows to use the following parameters, which can be used as documented [here](https://www.gisgraphy.com/documentation/user-guide.php#geocodingservice):  * `radius` - radius in meters * `country` - restrict search for the specified country. The value must be the ISO 3166 Alpha 2 code of the country.  #### NetToolKit (`provider=nettoolkit`)  This provider returns results from the NetToolKit provider which is specialized for US addresses and provides a wrapper around Nominatim for other addresses. You can try it [here](https://www.nettoolkit.com/geo/demo).  The following additional NetToolKit parameters are supported (read [here](https://www.nettoolkit.com/docs/geo/geocoding) for more details): - `source`: User can choose which source provider to geocode the address, this value is \"NetToolKit\" by default - `country_code`: an iso-3166-2 country code (e.g : US) filter the results to the specify country code  **Limitations:** NetToolKit does not support the `locale` parameter. NetToolKit does not return OSM tags (e.g. osm_id, osm_type, osm_value).  #### OpenCage Data (`provider=opencagedata`)  This provider returns results from the OpenCageData geocoder which you can try [here](https://geocoder.opencagedata.com/demo).  In addition to the above documented parameters OpenCage Data allows to use the following parameters, which can be used as documented [here](https://geocoder.opencagedata.com/api#forward-opt):  * countrycode - The country code is a two letter code as defined by the ISO 3166-1 Alpha 2 standard. E.g. gb for the United Kingdom, fr for France, us for United States.  * bounds - the expected format is `minLon,minLat,maxLon,maxLat` 
        :type provider: str
        :param _request_timeout: timeout setting for this request. If one
                                 number provided, it will be total request
                                 timeout. It can also be a pair (tuple) of
                                 (connection, read) timeouts.
        :type _request_timeout: int, tuple(int, int), optional
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the
                              authentication in the spec for a single request.
        :type _request_auth: dict, optional
        :param _content_type: force content-type for the request.
        :type _content_type: str, Optional
        :param _headers: set to override the headers for a single
                         request; this effectively ignores the headers
                         in the spec for a single request.
        :type _headers: dict, optional
        :param _host_index: set to override the host_index for a single
                            request; this effectively ignores the host_index
                            in the spec for a single request.
        :type _host_index: int, optional
        :return: Returns the result object.
        """ # noqa: E501

        _param = self._get_geocode_serialize(
            q=q,
            locale=locale,
            limit=limit,
            reverse=reverse,
            debug=debug,
            point=point,
            provider=provider,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "GeocodingResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _get_geocode_serialize(
        self,
        q,
        locale,
        limit,
        reverse,
        debug,
        point,
        provider,
        _request_auth,
        _content_type,
        _headers,
        _host_index,
    ) -> RequestSerialized:

        _host = None

        _collection_formats: Dict[str, str] = {
        }

        _path_params: Dict[str, str] = {}
        _query_params: List[Tuple[str, str]] = []
        _header_params: Dict[str, Optional[str]] = _headers or {}
        _form_params: List[Tuple[str, str]] = []
        _files: Dict[
            str, Union[str, bytes, List[str], List[bytes], List[Tuple[str, bytes]]]
        ] = {}
        _body_params: Optional[bytes] = None

        # process the path parameters
        # process the query parameters
        if q is not None:
            
            _query_params.append(('q', q))
            
        if locale is not None:
            
            _query_params.append(('locale', locale))
            
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if reverse is not None:
            
            _query_params.append(('reverse', reverse))
            
        if debug is not None:
            
            _query_params.append(('debug', debug))
            
        if point is not None:
            
            _query_params.append(('point', point))
            
        if provider is not None:
            
            _query_params.append(('provider', provider))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )


        # authentication setting
        _auth_settings: List[str] = [
            'api_key'
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/geocode',
            path_params=_path_params,
            query_params=_query_params,
            header_params=_header_params,
            body=_body_params,
            post_params=_form_params,
            files=_files,
            auth_settings=_auth_settings,
            collection_formats=_collection_formats,
            _host=_host,
            _request_auth=_request_auth
        )


