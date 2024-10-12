# coding: utf-8

"""
    API Reference - Ideal Postcodes

    # Getting Started  ## Overview  ### Access  All API methods are either a `GET`, `POST` or `OPTIONS` request.  The API communicates over both HTTPS and plain HTTP using IPv4 and IPv6.  We recommend using HTTPS only although HTTP is available.  We use appropriate HTTP status codes where possible to indicate the request status.  ### Rate Limiting  Each IP address is rate limited at 30 requests per second. Tripping the rate limit will result in a 503 response.  The autocomplete API also has an additional rate limit.  If you expect to breach the limit please contact us and we can move you to an endpoint with a higher limit.  ### JSONP  [JSONP](http://en.wikipedia.org/wiki/JSONP) requests are supported. Include a `callback=` in your request as a query parameter. Your results return wrapped in a function designated by your request.  ## Authentication  Most requests require an **API key** for authentication. Authenticate by passing an `api_key` as part of the query string. For example:  ``` api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=parkside ```  Alternatively, authentication can be transmitted via the `Authorization` header using the following scheme:  ``` Authorization: api_key=\"iddqd\" [other_key=\"foo\"] ```  ## Versioning  This API is versioned with a simple prefix in the URL. The current version is `/v1/`. We will maintain backwards-compatibility by releasing breaking changes under a new version.  Please note that the following changes are backwards-compatible:  - Adding new properties to existing API responses - Adding new API endpoints - Adding new optional request parameters to existing API endpoints - Changing the order of properties in existing API responses - Changing the autocomplete address suggestion format  ## Error Handling  A successful lookup is accompanied with a HTTP status code of 200 and a response code of 2000 (found in the body).  An error has occurred if the HTTP status code is not 200. Errors can range from a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).  ## Testing  Each new account comes with a free test balance. Contact us if you need more for testing and integration.  ### Community Key  Our documentation and demos make heavy use of our community key `iddqd`. This allows for convenient access for trialing the API.  Many restrictions on this key are relaxed to allow developers make test requests. This key has a limit of 15 lookups per IP address per day as well as a daily usage cap. If you hit any limit restrictions, you can continue testing the API by creating a key of your own and using our free test methods.  Please be kind with the community key. We're trusting everyone to use it responsibly so that other developers may trial the API. Thank you!  ## Metadata  Requests that affect your balance may be annotated with arbitrary metadata. This data is stored along with your lookup history and can be queried at a later date via the API or the dashboard. We call the ability to label your requests [tagging](https://docs.ideal-postcodes.co.uk/docs/guides/tags).  # Response Codes  The API returns two indicators to help you to determine the status of each HTTP request.  The first is the **HTTP Status**, which is found in the status-line of all HTTP requests. The API will return status codes that adhere to HTTP /1.1 Specifications wherever possible.  `2XX` status codes indicates success while `4XX` and `5XX` indicate client and server errors respectively.  The second is the **API response code**, which can be found in the `code` property of the response body. This code will provide a more specific reason if a failure has occurred and can point you in the right direction when debugging.  Please use the glossary of code numbers and HTTP status codes below when debugging your requests.  ## 200 Request Success  | HTTP Code | API Code | Description                                  | | --------- | -------- | -------------------------------------------- | | 200       | 2000     | Success. Request was completed successfully. |  ## 400 Bad Request  The request could not be understood due to some input error.  | HTTP Code | API Code | Description                                                                                                                           | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | | 400       | 4000     | Invalid syntax submitted. Some part of your request was malformed or did not match our specifications.                                | | 400       | 4001     | Validation failed on your submitted data. Some of the data you provided did not meet our validation requirements, e.g. string length. | | 400       | 4005     | Invalid start date. Please ensure start dates are provided as a UTC Timestamp in milliseconds.                                        | | 400       | 4006     | Invalid end date. Please ensure end dates are provided as a UTC Timestamp in milliseconds.                                            | | 400       | 4007     | Invalid date range. Check if your start and end dates are in the right order.                                                         | | 400       | 4008     | Invalid date range. Check that your date range is 90 days or less.                                                                    | | 400       | 4009     | Too many tags. Please specify no more than 3 tags to query.                                                                           |  ## 401 Unauthorised  Authorization credentials are not valid.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 401       | 4010     | Invalid Key. The `api_key` you provided is not valid.                                                                                                              | | 401       | 4011     | Requesting URL not on whitelist. The cross domain request is not coming from a whitelisted URL. You can update or disable your allowed URLs via your Key settings. | | 401       | 4012     | Failed user authentication. Invalid `user_token` presented.                                                                                                        | | 401       | 4013     | Licensee Key is required. Sublicensed keys require you need to present licensee credentials via the `licensee` parameter.                                          |  ## 402 Request Failed  Your request is well-formed but are not able to complete your request for another reason.  | HTTP Code | API Code | Description                                                                                                                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 402       | 4020     | Key balance depleted. You're out of lookups on your API Key.                                                                                                                                                                                                       | | 402       | 4021     | Limit reached. One of your lookup limits has been breached for today. This could either be your total daily limit on your key or the individual IP limit. You can either wait for for the limit to reset (after a day) or manually disable or increase your limit. |  ## 404 Resource Not Found  The resource you requested does not exist.  | HTTP Code | API Code | Description                                                                                   | | --------- | -------- | --------------------------------------------------------------------------------------------- | | 404       | 4040     | Postcode not found. The postcode you have submitted does not exist.                           | | 404       | 4041     | User not found. Your user could not be identified given the credentials you presented.        | | 404       | 4042     | Key not found. Your key could not be identified given the credentials you presented.          | | 404       | 4044     | No UDPRN found. No address is associated with the UDPRN queried                               | | 404       | 4045     | No licensee found. Your licensee could not be identified given the credentials you presented. | | 404       | 4046     | No UMPRN found. No Multiple Residence premise is associated with the UMPRN queried.           |  ## 500 Server Error  A error occurred on our server.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 500       | 5000     | An error occurred on our end. These errors are logged and queued so we can understand what went wrong. However, if you need speedy resolution please email support | | 500       | 5001     | Akin to 5000.                                                                                                                                                      | | 500       | 5002     | The server took too long to process on our end, so we aborted the request. You may retry the request.                                                              | 

    The version of the OpenAPI document: 3.7.0
    Contact: support@ideal-postcodes.co.uk
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501

import warnings
from pydantic import validate_call, Field, StrictFloat, StrictStr, StrictInt
from typing import Any, Dict, List, Optional, Tuple, Union
from typing_extensions import Annotated

from pydantic import Field, StrictInt, StrictStr
from typing import Optional, Union
from typing_extensions import Annotated
from openapi_client.models.address_cleanse_request import AddressCleanseRequest
from openapi_client.models.address_response import AddressResponse
from openapi_client.models.cleanse_response import CleanseResponse
from openapi_client.models.postcode_response import PostcodeResponse
from openapi_client.models.udprn_response import UDPRNResponse
from openapi_client.models.umprn_response import UMPRNResponse

from openapi_client.api_client import ApiClient, RequestSerialized
from openapi_client.api_response import ApiResponse
from openapi_client.rest import RESTResponseType


class UKApi:
    """NOTE: This class is auto generated by OpenAPI Generator
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    def __init__(self, api_client=None) -> None:
        if api_client is None:
            api_client = ApiClient.get_default()
        self.api_client = api_client


    @validate_call
    def address_cleanse(
        self,
        address_cleanse_request: AddressCleanseRequest,
        api_key: Optional[StrictStr] = None,
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
    ) -> CleanseResponse:
        """Cleanse

        The address cleanse API attempts to return the closest matching address for any given address inputs. We also return a number of Match Level indicators that describe the degree to which the suggested address matches the input address. The more impaired the input address, the harder it is to cleanse.  ## Confidence Score  The confidence score is a number ranging between 0 and 1. Where 1 implies a full match and 0 implies no major elements completely match. Each incorrect, missing or misspelled element will subtract from the overall confidence score.  ### Deciding on an Acceptable Confidence Score Threshold  Different address cleanse projects can have radically different inputs. However, within each project, the inputs tend to repeat the same errors. For instance, some input datasets may be exclusively inputted manually and be prone to typos. Others may have a persistently missing datapoint such as organistation name or postcode. For this reason, it is important to understand that there is no absolute Confidence Score threshold. Instead, the acceptable confidence score must be determined on a project by project basis based on systematic errors present in the data and business goals.  When determining an acceptable Confidence Score threshold you should load a subset of the dataset into a spreadsheet application like Excel and sort on the score. Scrolling from top-to-bottom you will be able to observe matches from best to worst. As you start to hit the lower quality searches, you will be able to roughly determine: - Which confidence scores indicate ambigious matches (i.e. up to building level only) - Which confidence scores indicate a poor or no match (i.e. the nearest matching address is too far from the input address)  Depending on your business goals, you can also use the Match Levels to determine an acceptable match. For instance, do you need to match up to the throroughfare or building name only? Are accurate organisation names an important feature? 

        :param address_cleanse_request: (required)
        :type address_cleanse_request: AddressCleanseRequest
        :param api_key:
        :type api_key: str
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

        _param = self._address_cleanse_serialize(
            address_cleanse_request=address_cleanse_request,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CleanseResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '429': "RateLimitedResponse",
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
    def address_cleanse_with_http_info(
        self,
        address_cleanse_request: AddressCleanseRequest,
        api_key: Optional[StrictStr] = None,
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
    ) -> ApiResponse[CleanseResponse]:
        """Cleanse

        The address cleanse API attempts to return the closest matching address for any given address inputs. We also return a number of Match Level indicators that describe the degree to which the suggested address matches the input address. The more impaired the input address, the harder it is to cleanse.  ## Confidence Score  The confidence score is a number ranging between 0 and 1. Where 1 implies a full match and 0 implies no major elements completely match. Each incorrect, missing or misspelled element will subtract from the overall confidence score.  ### Deciding on an Acceptable Confidence Score Threshold  Different address cleanse projects can have radically different inputs. However, within each project, the inputs tend to repeat the same errors. For instance, some input datasets may be exclusively inputted manually and be prone to typos. Others may have a persistently missing datapoint such as organistation name or postcode. For this reason, it is important to understand that there is no absolute Confidence Score threshold. Instead, the acceptable confidence score must be determined on a project by project basis based on systematic errors present in the data and business goals.  When determining an acceptable Confidence Score threshold you should load a subset of the dataset into a spreadsheet application like Excel and sort on the score. Scrolling from top-to-bottom you will be able to observe matches from best to worst. As you start to hit the lower quality searches, you will be able to roughly determine: - Which confidence scores indicate ambigious matches (i.e. up to building level only) - Which confidence scores indicate a poor or no match (i.e. the nearest matching address is too far from the input address)  Depending on your business goals, you can also use the Match Levels to determine an acceptable match. For instance, do you need to match up to the throroughfare or building name only? Are accurate organisation names an important feature? 

        :param address_cleanse_request: (required)
        :type address_cleanse_request: AddressCleanseRequest
        :param api_key:
        :type api_key: str
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

        _param = self._address_cleanse_serialize(
            address_cleanse_request=address_cleanse_request,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CleanseResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '429': "RateLimitedResponse",
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
    def address_cleanse_without_preload_content(
        self,
        address_cleanse_request: AddressCleanseRequest,
        api_key: Optional[StrictStr] = None,
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
        """Cleanse

        The address cleanse API attempts to return the closest matching address for any given address inputs. We also return a number of Match Level indicators that describe the degree to which the suggested address matches the input address. The more impaired the input address, the harder it is to cleanse.  ## Confidence Score  The confidence score is a number ranging between 0 and 1. Where 1 implies a full match and 0 implies no major elements completely match. Each incorrect, missing or misspelled element will subtract from the overall confidence score.  ### Deciding on an Acceptable Confidence Score Threshold  Different address cleanse projects can have radically different inputs. However, within each project, the inputs tend to repeat the same errors. For instance, some input datasets may be exclusively inputted manually and be prone to typos. Others may have a persistently missing datapoint such as organistation name or postcode. For this reason, it is important to understand that there is no absolute Confidence Score threshold. Instead, the acceptable confidence score must be determined on a project by project basis based on systematic errors present in the data and business goals.  When determining an acceptable Confidence Score threshold you should load a subset of the dataset into a spreadsheet application like Excel and sort on the score. Scrolling from top-to-bottom you will be able to observe matches from best to worst. As you start to hit the lower quality searches, you will be able to roughly determine: - Which confidence scores indicate ambigious matches (i.e. up to building level only) - Which confidence scores indicate a poor or no match (i.e. the nearest matching address is too far from the input address)  Depending on your business goals, you can also use the Match Levels to determine an acceptable match. For instance, do you need to match up to the throroughfare or building name only? Are accurate organisation names an important feature? 

        :param address_cleanse_request: (required)
        :type address_cleanse_request: AddressCleanseRequest
        :param api_key:
        :type api_key: str
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

        _param = self._address_cleanse_serialize(
            address_cleanse_request=address_cleanse_request,
            api_key=api_key,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "CleanseResponse",
            '400': "BadRequestResponse",
            '401': "UnauthorizedResponse",
            '429': "RateLimitedResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _address_cleanse_serialize(
        self,
        address_cleanse_request,
        api_key,
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
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        # process the header parameters
        # process the form parameters
        # process the body parameter
        if address_cleanse_request is not None:
            _body_params = address_cleanse_request


        # set the HTTP header `Accept`
        if 'Accept' not in _header_params:
            _header_params['Accept'] = self.api_client.select_header_accept(
                [
                    'application/json'
                ]
            )

        # set the HTTP header `Content-Type`
        if _content_type:
            _header_params['Content-Type'] = _content_type
        else:
            _default_content_type = (
                self.api_client.select_header_content_type(
                    [
                        'application/json'
                    ]
                )
            )
            if _default_content_type is not None:
                _header_params['Content-Type'] = _default_content_type

        # authentication setting
        _auth_settings: List[str] = [
        ]

        return self.api_client.param_serialize(
            method='POST',
            resource_path='/cleanse/addresses',
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




    @validate_call
    def addresses(
        self,
        api_key: StrictStr,
        query: Annotated[Optional[StrictStr], Field(description="Specifies the address you wish to query. Query can be shortened to `q=`")] = None,
        limit: Optional[Annotated[int, Field(le=100, strict=True, ge=1)]] = None,
        page: Optional[Annotated[int, Field(strict=True, ge=0)]] = None,
        filter: Optional[StrictStr] = None,
        lon: Optional[Union[Annotated[float, Field(le=90, strict=True, ge=-90)], Annotated[int, Field(le=90, strict=True, ge=-90)]]] = None,
        lat: Optional[Union[Annotated[float, Field(le=90, strict=True, ge=-90)], Annotated[int, Field(le=90, strict=True, ge=-90)]]] = None,
        postcode_outward: Optional[StrictStr] = None,
        postcode: Optional[StrictStr] = None,
        postcode_area: Optional[StrictStr] = None,
        postcode_sector: Optional[StrictStr] = None,
        post_town: Optional[StrictStr] = None,
        uprn: Optional[StrictInt] = None,
        country: Optional[StrictStr] = None,
        postcode_type: Optional[StrictStr] = None,
        su_organisation_indicator: Optional[StrictStr] = None,
        box: Optional[StrictStr] = None,
        bias_postcode_outward: Optional[StrictStr] = None,
        bias_postcode: Optional[StrictStr] = None,
        bias_postcode_area: Optional[StrictStr] = None,
        bias_postcode_sector: Optional[StrictStr] = None,
        bias_post_town: Optional[StrictStr] = None,
        bias_thoroughfare: Optional[StrictStr] = None,
        bias_country: Optional[StrictStr] = None,
        bias_lonlat: Optional[StrictStr] = None,
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
    ) -> AddressResponse:
        """Extract Addresses

        Extract a list of complete addresses that match the query ordered by relevance score. This query accepts an optional limit and page query (defaults to 10 and 0 respectively).  If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.  This API is designed as a multi-purpose tool for generating address lists, cleansing and wholesale data extraction according to specific parameters.  For address autocomplete, see our address finder API - which is designed for speed and address completion.  ## Reverse Geocoding  Return a list of addresses around a point using the lon= and lat= querystring arguments. Addresses will be sorted in order of distance to the point. The search radius is 100m.  ## Filters  You can strictly narrow your result by adding filters to your query string which correspond with an address attribute.  For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Multiple filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A combined maximum of 5 terms are allowed across all filters.  ## Biases  You can boost certain addresses results that correspond with a certain address attribute. All bias searches are prefixed with `bias_`.  Biased searches, unlike filtered searches, also allow unmatched addresses to appear . These will rank lower.  For instance, you can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  If a bias term is invalid, e.g. `bias_postcode=SW1A2AAA` no bias effect is applied.  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: `bias_postcode_outward=e1,e2,e3`.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of 5 terms are allowed across all biases.  ## Search by Postcode and Building Name or Number  Search by postcode and building attribute with the postcode filter and query argument. E.g. For \"SW1A 2AA Prime Minister\" `/v1/addresses?postcode=sw1a2aa&q=prime minister`.  The advantage of using filters is a postcode mismatch does not result in a lookup as no results are returned.  #### Search By UPRN  Search by UPRN using the `uprn` filter and excluding the query argument. E.g. `/v1/addresses?uprn=100`.  ## Testing  - **ID1 1QD** Returns a successful query response `2000` - **ID1 KFA** Returns an empty query response `2000` - **ID1 CLIP** Returns \"no lookups remaining\" error `4020` - **ID1 CHOP** Returns \"daily (or individual) lookup limit breached\" error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup. 

        :param api_key: (required)
        :type api_key: str
        :param query: Specifies the address you wish to query. Query can be shortened to `q=`
        :type query: str
        :param limit:
        :type limit: int
        :param page:
        :type page: int
        :param filter:
        :type filter: str
        :param lon:
        :type lon: float
        :param lat:
        :type lat: float
        :param postcode_outward:
        :type postcode_outward: str
        :param postcode:
        :type postcode: str
        :param postcode_area:
        :type postcode_area: str
        :param postcode_sector:
        :type postcode_sector: str
        :param post_town:
        :type post_town: str
        :param uprn:
        :type uprn: int
        :param country:
        :type country: str
        :param postcode_type:
        :type postcode_type: str
        :param su_organisation_indicator:
        :type su_organisation_indicator: str
        :param box:
        :type box: str
        :param bias_postcode_outward:
        :type bias_postcode_outward: str
        :param bias_postcode:
        :type bias_postcode: str
        :param bias_postcode_area:
        :type bias_postcode_area: str
        :param bias_postcode_sector:
        :type bias_postcode_sector: str
        :param bias_post_town:
        :type bias_post_town: str
        :param bias_thoroughfare:
        :type bias_thoroughfare: str
        :param bias_country:
        :type bias_country: str
        :param bias_lonlat:
        :type bias_lonlat: str
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

        _param = self._addresses_serialize(
            api_key=api_key,
            query=query,
            limit=limit,
            page=page,
            filter=filter,
            lon=lon,
            lat=lat,
            postcode_outward=postcode_outward,
            postcode=postcode,
            postcode_area=postcode_area,
            postcode_sector=postcode_sector,
            post_town=post_town,
            uprn=uprn,
            country=country,
            postcode_type=postcode_type,
            su_organisation_indicator=su_organisation_indicator,
            box=box,
            bias_postcode_outward=bias_postcode_outward,
            bias_postcode=bias_postcode,
            bias_postcode_area=bias_postcode_area,
            bias_postcode_sector=bias_postcode_sector,
            bias_post_town=bias_post_town,
            bias_thoroughfare=bias_thoroughfare,
            bias_country=bias_country,
            bias_lonlat=bias_lonlat,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "AddressResponse",
            '400': "BadRequestResponse",
            '404': "PostcodeNotFoundResponse",
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
    def addresses_with_http_info(
        self,
        api_key: StrictStr,
        query: Annotated[Optional[StrictStr], Field(description="Specifies the address you wish to query. Query can be shortened to `q=`")] = None,
        limit: Optional[Annotated[int, Field(le=100, strict=True, ge=1)]] = None,
        page: Optional[Annotated[int, Field(strict=True, ge=0)]] = None,
        filter: Optional[StrictStr] = None,
        lon: Optional[Union[Annotated[float, Field(le=90, strict=True, ge=-90)], Annotated[int, Field(le=90, strict=True, ge=-90)]]] = None,
        lat: Optional[Union[Annotated[float, Field(le=90, strict=True, ge=-90)], Annotated[int, Field(le=90, strict=True, ge=-90)]]] = None,
        postcode_outward: Optional[StrictStr] = None,
        postcode: Optional[StrictStr] = None,
        postcode_area: Optional[StrictStr] = None,
        postcode_sector: Optional[StrictStr] = None,
        post_town: Optional[StrictStr] = None,
        uprn: Optional[StrictInt] = None,
        country: Optional[StrictStr] = None,
        postcode_type: Optional[StrictStr] = None,
        su_organisation_indicator: Optional[StrictStr] = None,
        box: Optional[StrictStr] = None,
        bias_postcode_outward: Optional[StrictStr] = None,
        bias_postcode: Optional[StrictStr] = None,
        bias_postcode_area: Optional[StrictStr] = None,
        bias_postcode_sector: Optional[StrictStr] = None,
        bias_post_town: Optional[StrictStr] = None,
        bias_thoroughfare: Optional[StrictStr] = None,
        bias_country: Optional[StrictStr] = None,
        bias_lonlat: Optional[StrictStr] = None,
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
    ) -> ApiResponse[AddressResponse]:
        """Extract Addresses

        Extract a list of complete addresses that match the query ordered by relevance score. This query accepts an optional limit and page query (defaults to 10 and 0 respectively).  If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.  This API is designed as a multi-purpose tool for generating address lists, cleansing and wholesale data extraction according to specific parameters.  For address autocomplete, see our address finder API - which is designed for speed and address completion.  ## Reverse Geocoding  Return a list of addresses around a point using the lon= and lat= querystring arguments. Addresses will be sorted in order of distance to the point. The search radius is 100m.  ## Filters  You can strictly narrow your result by adding filters to your query string which correspond with an address attribute.  For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Multiple filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A combined maximum of 5 terms are allowed across all filters.  ## Biases  You can boost certain addresses results that correspond with a certain address attribute. All bias searches are prefixed with `bias_`.  Biased searches, unlike filtered searches, also allow unmatched addresses to appear . These will rank lower.  For instance, you can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  If a bias term is invalid, e.g. `bias_postcode=SW1A2AAA` no bias effect is applied.  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: `bias_postcode_outward=e1,e2,e3`.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of 5 terms are allowed across all biases.  ## Search by Postcode and Building Name or Number  Search by postcode and building attribute with the postcode filter and query argument. E.g. For \"SW1A 2AA Prime Minister\" `/v1/addresses?postcode=sw1a2aa&q=prime minister`.  The advantage of using filters is a postcode mismatch does not result in a lookup as no results are returned.  #### Search By UPRN  Search by UPRN using the `uprn` filter and excluding the query argument. E.g. `/v1/addresses?uprn=100`.  ## Testing  - **ID1 1QD** Returns a successful query response `2000` - **ID1 KFA** Returns an empty query response `2000` - **ID1 CLIP** Returns \"no lookups remaining\" error `4020` - **ID1 CHOP** Returns \"daily (or individual) lookup limit breached\" error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup. 

        :param api_key: (required)
        :type api_key: str
        :param query: Specifies the address you wish to query. Query can be shortened to `q=`
        :type query: str
        :param limit:
        :type limit: int
        :param page:
        :type page: int
        :param filter:
        :type filter: str
        :param lon:
        :type lon: float
        :param lat:
        :type lat: float
        :param postcode_outward:
        :type postcode_outward: str
        :param postcode:
        :type postcode: str
        :param postcode_area:
        :type postcode_area: str
        :param postcode_sector:
        :type postcode_sector: str
        :param post_town:
        :type post_town: str
        :param uprn:
        :type uprn: int
        :param country:
        :type country: str
        :param postcode_type:
        :type postcode_type: str
        :param su_organisation_indicator:
        :type su_organisation_indicator: str
        :param box:
        :type box: str
        :param bias_postcode_outward:
        :type bias_postcode_outward: str
        :param bias_postcode:
        :type bias_postcode: str
        :param bias_postcode_area:
        :type bias_postcode_area: str
        :param bias_postcode_sector:
        :type bias_postcode_sector: str
        :param bias_post_town:
        :type bias_post_town: str
        :param bias_thoroughfare:
        :type bias_thoroughfare: str
        :param bias_country:
        :type bias_country: str
        :param bias_lonlat:
        :type bias_lonlat: str
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

        _param = self._addresses_serialize(
            api_key=api_key,
            query=query,
            limit=limit,
            page=page,
            filter=filter,
            lon=lon,
            lat=lat,
            postcode_outward=postcode_outward,
            postcode=postcode,
            postcode_area=postcode_area,
            postcode_sector=postcode_sector,
            post_town=post_town,
            uprn=uprn,
            country=country,
            postcode_type=postcode_type,
            su_organisation_indicator=su_organisation_indicator,
            box=box,
            bias_postcode_outward=bias_postcode_outward,
            bias_postcode=bias_postcode,
            bias_postcode_area=bias_postcode_area,
            bias_postcode_sector=bias_postcode_sector,
            bias_post_town=bias_post_town,
            bias_thoroughfare=bias_thoroughfare,
            bias_country=bias_country,
            bias_lonlat=bias_lonlat,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "AddressResponse",
            '400': "BadRequestResponse",
            '404': "PostcodeNotFoundResponse",
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
    def addresses_without_preload_content(
        self,
        api_key: StrictStr,
        query: Annotated[Optional[StrictStr], Field(description="Specifies the address you wish to query. Query can be shortened to `q=`")] = None,
        limit: Optional[Annotated[int, Field(le=100, strict=True, ge=1)]] = None,
        page: Optional[Annotated[int, Field(strict=True, ge=0)]] = None,
        filter: Optional[StrictStr] = None,
        lon: Optional[Union[Annotated[float, Field(le=90, strict=True, ge=-90)], Annotated[int, Field(le=90, strict=True, ge=-90)]]] = None,
        lat: Optional[Union[Annotated[float, Field(le=90, strict=True, ge=-90)], Annotated[int, Field(le=90, strict=True, ge=-90)]]] = None,
        postcode_outward: Optional[StrictStr] = None,
        postcode: Optional[StrictStr] = None,
        postcode_area: Optional[StrictStr] = None,
        postcode_sector: Optional[StrictStr] = None,
        post_town: Optional[StrictStr] = None,
        uprn: Optional[StrictInt] = None,
        country: Optional[StrictStr] = None,
        postcode_type: Optional[StrictStr] = None,
        su_organisation_indicator: Optional[StrictStr] = None,
        box: Optional[StrictStr] = None,
        bias_postcode_outward: Optional[StrictStr] = None,
        bias_postcode: Optional[StrictStr] = None,
        bias_postcode_area: Optional[StrictStr] = None,
        bias_postcode_sector: Optional[StrictStr] = None,
        bias_post_town: Optional[StrictStr] = None,
        bias_thoroughfare: Optional[StrictStr] = None,
        bias_country: Optional[StrictStr] = None,
        bias_lonlat: Optional[StrictStr] = None,
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
        """Extract Addresses

        Extract a list of complete addresses that match the query ordered by relevance score. This query accepts an optional limit and page query (defaults to 10 and 0 respectively).  If a valid postcode is passed as the query string, the entire address list for that postcode is passed as a result. Note, in these cases, limit and page parameters are ignored.  This API is designed as a multi-purpose tool for generating address lists, cleansing and wholesale data extraction according to specific parameters.  For address autocomplete, see our address finder API - which is designed for speed and address completion.  ## Reverse Geocoding  Return a list of addresses around a point using the lon= and lat= querystring arguments. Addresses will be sorted in order of distance to the point. The search radius is 100m.  ## Filters  You can strictly narrow your result by adding filters to your query string which correspond with an address attribute.  For instance, you can restrict to postcode `SW1A 2AA` by appending `postcode=sw1a2aa`.  If a filter term is invalid, e.g. `postcode=SW1A2AAA`, then an empty result set is returned and no lookup is incurred.  You can also scope using multiple terms for the same filter with a comma separated list of terms. E.g. Restrict results to E1, E2 and E3 outward codes: `postcode_outward=e1,e2,e3`. Multiple terms are `OR`'ed, i.e. the matching result sets are combined.  All filters can accept multiple terms unless stated otherwise below.  Multiple filters can also be combined. E.g. Restrict results to small user organisations in the N postcode area: `su_organisation_indicator=Y&postcode_area=n`. Multiple filters are `AND`'ed, i.e. each additional filter narrows the result set.  A combined maximum of 5 terms are allowed across all filters.  ## Biases  You can boost certain addresses results that correspond with a certain address attribute. All bias searches are prefixed with `bias_`.  Biased searches, unlike filtered searches, also allow unmatched addresses to appear . These will rank lower.  For instance, you can boost addresses with postcode areas `SW` and `SE` by appending `bias_postcode_area=SW,SE`.  If a bias term is invalid, e.g. `bias_postcode=SW1A2AAA` no bias effect is applied.  You may scope using multiple terms for the same bias with a comma separated list of terms. E.g. Restrict results to `E1`, `E2` and `E3` outward codes: `bias_postcode_outward=e1,e2,e3`.  All biases can accept multiple terms unless stated otherwise below.  A combined maximum of 5 terms are allowed across all biases.  ## Search by Postcode and Building Name or Number  Search by postcode and building attribute with the postcode filter and query argument. E.g. For \"SW1A 2AA Prime Minister\" `/v1/addresses?postcode=sw1a2aa&q=prime minister`.  The advantage of using filters is a postcode mismatch does not result in a lookup as no results are returned.  #### Search By UPRN  Search by UPRN using the `uprn` filter and excluding the query argument. E.g. `/v1/addresses?uprn=100`.  ## Testing  - **ID1 1QD** Returns a successful query response `2000` - **ID1 KFA** Returns an empty query response `2000` - **ID1 CLIP** Returns \"no lookups remaining\" error `4020` - **ID1 CHOP** Returns \"daily (or individual) lookup limit breached\" error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup. 

        :param api_key: (required)
        :type api_key: str
        :param query: Specifies the address you wish to query. Query can be shortened to `q=`
        :type query: str
        :param limit:
        :type limit: int
        :param page:
        :type page: int
        :param filter:
        :type filter: str
        :param lon:
        :type lon: float
        :param lat:
        :type lat: float
        :param postcode_outward:
        :type postcode_outward: str
        :param postcode:
        :type postcode: str
        :param postcode_area:
        :type postcode_area: str
        :param postcode_sector:
        :type postcode_sector: str
        :param post_town:
        :type post_town: str
        :param uprn:
        :type uprn: int
        :param country:
        :type country: str
        :param postcode_type:
        :type postcode_type: str
        :param su_organisation_indicator:
        :type su_organisation_indicator: str
        :param box:
        :type box: str
        :param bias_postcode_outward:
        :type bias_postcode_outward: str
        :param bias_postcode:
        :type bias_postcode: str
        :param bias_postcode_area:
        :type bias_postcode_area: str
        :param bias_postcode_sector:
        :type bias_postcode_sector: str
        :param bias_post_town:
        :type bias_post_town: str
        :param bias_thoroughfare:
        :type bias_thoroughfare: str
        :param bias_country:
        :type bias_country: str
        :param bias_lonlat:
        :type bias_lonlat: str
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

        _param = self._addresses_serialize(
            api_key=api_key,
            query=query,
            limit=limit,
            page=page,
            filter=filter,
            lon=lon,
            lat=lat,
            postcode_outward=postcode_outward,
            postcode=postcode,
            postcode_area=postcode_area,
            postcode_sector=postcode_sector,
            post_town=post_town,
            uprn=uprn,
            country=country,
            postcode_type=postcode_type,
            su_organisation_indicator=su_organisation_indicator,
            box=box,
            bias_postcode_outward=bias_postcode_outward,
            bias_postcode=bias_postcode,
            bias_postcode_area=bias_postcode_area,
            bias_postcode_sector=bias_postcode_sector,
            bias_post_town=bias_post_town,
            bias_thoroughfare=bias_thoroughfare,
            bias_country=bias_country,
            bias_lonlat=bias_lonlat,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "AddressResponse",
            '400': "BadRequestResponse",
            '404': "PostcodeNotFoundResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _addresses_serialize(
        self,
        api_key,
        query,
        limit,
        page,
        filter,
        lon,
        lat,
        postcode_outward,
        postcode,
        postcode_area,
        postcode_sector,
        post_town,
        uprn,
        country,
        postcode_type,
        su_organisation_indicator,
        box,
        bias_postcode_outward,
        bias_postcode,
        bias_postcode_area,
        bias_postcode_sector,
        bias_post_town,
        bias_thoroughfare,
        bias_country,
        bias_lonlat,
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
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        if query is not None:
            
            _query_params.append(('query', query))
            
        if limit is not None:
            
            _query_params.append(('limit', limit))
            
        if page is not None:
            
            _query_params.append(('page', page))
            
        if filter is not None:
            
            _query_params.append(('filter', filter))
            
        if lon is not None:
            
            _query_params.append(('lon', lon))
            
        if lat is not None:
            
            _query_params.append(('lat', lat))
            
        if postcode_outward is not None:
            
            _query_params.append(('postcode_outward', postcode_outward))
            
        if postcode is not None:
            
            _query_params.append(('postcode', postcode))
            
        if postcode_area is not None:
            
            _query_params.append(('postcode_area', postcode_area))
            
        if postcode_sector is not None:
            
            _query_params.append(('postcode_sector', postcode_sector))
            
        if post_town is not None:
            
            _query_params.append(('post_town', post_town))
            
        if uprn is not None:
            
            _query_params.append(('uprn', uprn))
            
        if country is not None:
            
            _query_params.append(('country', country))
            
        if postcode_type is not None:
            
            _query_params.append(('postcode_type', postcode_type))
            
        if su_organisation_indicator is not None:
            
            _query_params.append(('su_organisation_indicator', su_organisation_indicator))
            
        if box is not None:
            
            _query_params.append(('box', box))
            
        if bias_postcode_outward is not None:
            
            _query_params.append(('bias_postcode_outward', bias_postcode_outward))
            
        if bias_postcode is not None:
            
            _query_params.append(('bias_postcode', bias_postcode))
            
        if bias_postcode_area is not None:
            
            _query_params.append(('bias_postcode_area', bias_postcode_area))
            
        if bias_postcode_sector is not None:
            
            _query_params.append(('bias_postcode_sector', bias_postcode_sector))
            
        if bias_post_town is not None:
            
            _query_params.append(('bias_post_town', bias_post_town))
            
        if bias_thoroughfare is not None:
            
            _query_params.append(('bias_thoroughfare', bias_thoroughfare))
            
        if bias_country is not None:
            
            _query_params.append(('bias_country', bias_country))
            
        if bias_lonlat is not None:
            
            _query_params.append(('bias_lonlat', bias_lonlat))
            
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
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/addresses',
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




    @validate_call
    def postcodes(
        self,
        postcode: Annotated[str, Field(min_length=6, strict=True, max_length=8, description="Postcode to retrieve")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
        page: Optional[Annotated[int, Field(strict=True, ge=0)]] = None,
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
    ) -> PostcodeResponse:
        """Lookup Postcode

        Returns the complete list of addresses for a postcode. Postcode searches are space and case insensitive.  The Postcode Lookup API provides a JSON interface to search UK addresses from a postcode. It can be used to power Postcode Lookup driven address searches, like [Postcode Lookup](/postcode-lookup).  ## Postcode Not Found  Lookup balance is unaffected by invalid postcodes. The API returns a `404` response with response body:  ```json {   \"code\": 4040,   \"message\": \"Postcode not found\",   \"suggestions\": [\"SW1A 0AA\"] } ```  ### Suggestions  If a postcode cannot be found, the API will provide up to 5 closest matching postcodes. Common errors will be corrected first (e.g. mixing up `O` and `0` or `I` and `1`).  If the suggestion list is small (fewer than 3), there is a high probability the correct postcode is there. You may notify the user or immediately trigger new searches.  The suggestion list will be empty if the postcode has deviated too far from a valid postcode format.  ## Multiple Residence  A small number of postcodes will return more than 100 premises. These may require pagination. Use `page` to paginate the result set. 

        :param postcode: Postcode to retrieve (required)
        :type postcode: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
        :param page:
        :type page: int
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

        _param = self._postcodes_serialize(
            postcode=postcode,
            api_key=api_key,
            filter=filter,
            page=page,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "PostcodeResponse",
            '400': "BadRequestResponse",
            '404': "PostcodeNotFoundResponse",
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
    def postcodes_with_http_info(
        self,
        postcode: Annotated[str, Field(min_length=6, strict=True, max_length=8, description="Postcode to retrieve")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
        page: Optional[Annotated[int, Field(strict=True, ge=0)]] = None,
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
    ) -> ApiResponse[PostcodeResponse]:
        """Lookup Postcode

        Returns the complete list of addresses for a postcode. Postcode searches are space and case insensitive.  The Postcode Lookup API provides a JSON interface to search UK addresses from a postcode. It can be used to power Postcode Lookup driven address searches, like [Postcode Lookup](/postcode-lookup).  ## Postcode Not Found  Lookup balance is unaffected by invalid postcodes. The API returns a `404` response with response body:  ```json {   \"code\": 4040,   \"message\": \"Postcode not found\",   \"suggestions\": [\"SW1A 0AA\"] } ```  ### Suggestions  If a postcode cannot be found, the API will provide up to 5 closest matching postcodes. Common errors will be corrected first (e.g. mixing up `O` and `0` or `I` and `1`).  If the suggestion list is small (fewer than 3), there is a high probability the correct postcode is there. You may notify the user or immediately trigger new searches.  The suggestion list will be empty if the postcode has deviated too far from a valid postcode format.  ## Multiple Residence  A small number of postcodes will return more than 100 premises. These may require pagination. Use `page` to paginate the result set. 

        :param postcode: Postcode to retrieve (required)
        :type postcode: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
        :param page:
        :type page: int
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

        _param = self._postcodes_serialize(
            postcode=postcode,
            api_key=api_key,
            filter=filter,
            page=page,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "PostcodeResponse",
            '400': "BadRequestResponse",
            '404': "PostcodeNotFoundResponse",
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
    def postcodes_without_preload_content(
        self,
        postcode: Annotated[str, Field(min_length=6, strict=True, max_length=8, description="Postcode to retrieve")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
        page: Optional[Annotated[int, Field(strict=True, ge=0)]] = None,
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
        """Lookup Postcode

        Returns the complete list of addresses for a postcode. Postcode searches are space and case insensitive.  The Postcode Lookup API provides a JSON interface to search UK addresses from a postcode. It can be used to power Postcode Lookup driven address searches, like [Postcode Lookup](/postcode-lookup).  ## Postcode Not Found  Lookup balance is unaffected by invalid postcodes. The API returns a `404` response with response body:  ```json {   \"code\": 4040,   \"message\": \"Postcode not found\",   \"suggestions\": [\"SW1A 0AA\"] } ```  ### Suggestions  If a postcode cannot be found, the API will provide up to 5 closest matching postcodes. Common errors will be corrected first (e.g. mixing up `O` and `0` or `I` and `1`).  If the suggestion list is small (fewer than 3), there is a high probability the correct postcode is there. You may notify the user or immediately trigger new searches.  The suggestion list will be empty if the postcode has deviated too far from a valid postcode format.  ## Multiple Residence  A small number of postcodes will return more than 100 premises. These may require pagination. Use `page` to paginate the result set. 

        :param postcode: Postcode to retrieve (required)
        :type postcode: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
        :param page:
        :type page: int
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

        _param = self._postcodes_serialize(
            postcode=postcode,
            api_key=api_key,
            filter=filter,
            page=page,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "PostcodeResponse",
            '400': "BadRequestResponse",
            '404': "PostcodeNotFoundResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _postcodes_serialize(
        self,
        postcode,
        api_key,
        filter,
        page,
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
        if postcode is not None:
            _path_params['postcode'] = postcode
        # process the query parameters
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        if filter is not None:
            
            _query_params.append(('filter', filter))
            
        if page is not None:
            
            _query_params.append(('page', page))
            
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
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/postcodes/{postcode}',
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




    @validate_call
    def u_dprn(
        self,
        udprn: Annotated[StrictStr, Field(description="UDPRN to be retrieved")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
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
    ) -> UDPRNResponse:
        """Retrieve by UDPRN

        Returns an address as identified by its Unique Delivery Point Reference Number (UDPRN).  You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a deleted address.  UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any premise on the Postcode Address File. It's essentially a unique identifier for every address in the UK that Royal Mail has in its database.  ## Testing  To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request.  They are the following:  - `0` Returns a successful UDPRN lookup response   `2000` - `-1` Returns \"UDPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\",   error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.

        :param udprn: UDPRN to be retrieved (required)
        :type udprn: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
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

        _param = self._u_dprn_serialize(
            udprn=udprn,
            api_key=api_key,
            filter=filter,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UDPRNResponse",
            '404': "ErrorResponse",
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
    def u_dprn_with_http_info(
        self,
        udprn: Annotated[StrictStr, Field(description="UDPRN to be retrieved")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
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
    ) -> ApiResponse[UDPRNResponse]:
        """Retrieve by UDPRN

        Returns an address as identified by its Unique Delivery Point Reference Number (UDPRN).  You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a deleted address.  UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any premise on the Postcode Address File. It's essentially a unique identifier for every address in the UK that Royal Mail has in its database.  ## Testing  To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request.  They are the following:  - `0` Returns a successful UDPRN lookup response   `2000` - `-1` Returns \"UDPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\",   error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.

        :param udprn: UDPRN to be retrieved (required)
        :type udprn: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
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

        _param = self._u_dprn_serialize(
            udprn=udprn,
            api_key=api_key,
            filter=filter,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UDPRNResponse",
            '404': "ErrorResponse",
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
    def u_dprn_without_preload_content(
        self,
        udprn: Annotated[StrictStr, Field(description="UDPRN to be retrieved")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
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
        """Retrieve by UDPRN

        Returns an address as identified by its Unique Delivery Point Reference Number (UDPRN).  You may find it useful to store UDPRN information as it can be used to retrieve the most recent information for an address. It can also be used to test for a deleted address.  UDPRNs are an eight digit unique numeric code (e.g. 25962203) for any premise on the Postcode Address File. It's essentially a unique identifier for every address in the UK that Royal Mail has in its database.  ## Testing  To test your implementation of our API we have a range of test UDPRNs that yield both successful and unsuccessful responses to your request.  They are the following:  - `0` Returns a successful UDPRN lookup response   `2000` - `-1` Returns \"UDPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\",   error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.

        :param udprn: UDPRN to be retrieved (required)
        :type udprn: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
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

        _param = self._u_dprn_serialize(
            udprn=udprn,
            api_key=api_key,
            filter=filter,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UDPRNResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _u_dprn_serialize(
        self,
        udprn,
        api_key,
        filter,
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
        if udprn is not None:
            _path_params['udprn'] = udprn
        # process the query parameters
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        if filter is not None:
            
            _query_params.append(('filter', filter))
            
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
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/udprn/{udprn}',
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




    @validate_call
    def u_mprn(
        self,
        umprn: Annotated[StrictStr, Field(description="UMPRN to be retrieved")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
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
    ) -> UMPRNResponse:
        """Retrieve by UMPRN

        Returns a multiple occupancy address identifited via its UMPRN (Multiple Residence Unique ID).  UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.  ## Testing  To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following  - `0` Returns a successful UMPRN lookup response `2000` - `-1` Returns \"UMPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\", error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.  ### Pricing  Per lookup charges apply. Empty responses are not charged. 

        :param umprn: UMPRN to be retrieved (required)
        :type umprn: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
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

        _param = self._u_mprn_serialize(
            umprn=umprn,
            api_key=api_key,
            filter=filter,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UMPRNResponse",
            '404': "ErrorResponse",
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
    def u_mprn_with_http_info(
        self,
        umprn: Annotated[StrictStr, Field(description="UMPRN to be retrieved")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
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
    ) -> ApiResponse[UMPRNResponse]:
        """Retrieve by UMPRN

        Returns a multiple occupancy address identifited via its UMPRN (Multiple Residence Unique ID).  UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.  ## Testing  To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following  - `0` Returns a successful UMPRN lookup response `2000` - `-1` Returns \"UMPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\", error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.  ### Pricing  Per lookup charges apply. Empty responses are not charged. 

        :param umprn: UMPRN to be retrieved (required)
        :type umprn: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
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

        _param = self._u_mprn_serialize(
            umprn=umprn,
            api_key=api_key,
            filter=filter,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UMPRNResponse",
            '404': "ErrorResponse",
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
    def u_mprn_without_preload_content(
        self,
        umprn: Annotated[StrictStr, Field(description="UMPRN to be retrieved")],
        api_key: Optional[StrictStr] = None,
        filter: Optional[StrictStr] = None,
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
        """Retrieve by UMPRN

        Returns a multiple occupancy address identifited via its UMPRN (Multiple Residence Unique ID).  UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.  ## Testing  To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following  - `0` Returns a successful UMPRN lookup response `2000` - `-1` Returns \"UMPRN not found\", error `4044` - `-2` Returns \"no lookups remaining\", error `4020` - `-3` Returns \"daily (or individual) lookup limit breached\", error `4021`  Test request undergo the usual authentication and restriction rules. This is to help surface any issues that occur during implementation and does not cost you a lookup.  ### Pricing  Per lookup charges apply. Empty responses are not charged. 

        :param umprn: UMPRN to be retrieved (required)
        :type umprn: str
        :param api_key:
        :type api_key: str
        :param filter:
        :type filter: str
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

        _param = self._u_mprn_serialize(
            umprn=umprn,
            api_key=api_key,
            filter=filter,
            _request_auth=_request_auth,
            _content_type=_content_type,
            _headers=_headers,
            _host_index=_host_index
        )

        _response_types_map: Dict[str, Optional[str]] = {
            '200': "UMPRNResponse",
            '404': "ErrorResponse",
        }
        response_data = self.api_client.call_api(
            *_param,
            _request_timeout=_request_timeout
        )
        return response_data.response


    def _u_mprn_serialize(
        self,
        umprn,
        api_key,
        filter,
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
        if umprn is not None:
            _path_params['umprn'] = umprn
        # process the query parameters
        if api_key is not None:
            
            _query_params.append(('api_key', api_key))
            
        if filter is not None:
            
            _query_params.append(('filter', filter))
            
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
        ]

        return self.api_client.param_serialize(
            method='GET',
            resource_path='/umprn/{umprn}',
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


