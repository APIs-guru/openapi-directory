# openapi-client

With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation,
route optimization, isochrone calculations and other tools in your application.

The GraphHopper Directions API consists of the following RESTful web services:

 * [Routing API](#tag/Routing-API),
 * [Route Optimization API](#tag/Route-Optimization-API),
 * [Isochrone API](#tag/Isochrone-API),
 * [Map Matching API](#tag/Map-Matching-API),
 * [Matrix API](#tag/Matrix-API),
 * [Geocoding API](#tag/Geocoding-API) and
 * [Cluster API](#tag/Cluster-API).

# Explore our APIs

## Get started

1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)

Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.

In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.

## Insomnia

To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:

1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json).
2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `\"api_key\": your API key`
3. Start exploring

![Insomnia](./img/insomnia.png)

## Postman

To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:

1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json).
2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `\"api_key\": your API key`
3. Start exploring

![Postman](./img/postman.png)

## API Client Libraries

To speed up development and make coding easier, we offer the following client libraries:

 * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)
 * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API

### Bandwidth reduction

If you create your own client, make sure it supports http/2 and gzipped responses for best speed.

If you use the Matrix, the Route Optimization API or the Cluster API and want to solve large problems, we recommend you to reduce bandwidth
by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4)
and specifying the header as follows: `Content-Encoding: gzip`. This will also avoid the HTTP 413 error \"Request Entity Too Large\".

## Contact Us

If you have problems or questions, please read the following information:

- [FAQ](https://graphhopper.com/api/1/docs/FAQ/)
- [Public forum](https://discuss.graphhopper.com/c/directions-api)
- [Contact us](https://www.graphhopper.com/contact-form/)
- [GraphHopper Status Page](https://status.graphhopper.com/)

To stay informed about the latest developments, you can

- follow us on [twitter](https://twitter.com/graphhopper/),
- read [our blog](https://graphhopper.com/blog/),
- watch [our documentation repository](https://github.com/graphhopper/directions-api-doc),
- sign up for our newsletter or
- [our forum](https://discuss.graphhopper.com/c/directions-api).

Select the channel you like the most.


# Map Data and Routing Profiles

Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers.
This chapter gives an overview about the options you have.

## OpenStreetMap

#### Geographical Coverage

[OpenStreetMap](https://www.openstreetmap.org) covers the whole world. If you want to see for yourself if we can provide data suitable for your region,
please visit [GraphHopper Maps](https://graphhopper.com/maps/).
You can edit and modify OpenStreetMap data if you find that important information is missing, e.g. a weight limit for a bridge.
[Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner's guide that shows how to add data. If you have edited data, we usually consider your data after 1 week at the latest.

#### Supported Vehicle Profiles

The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:

Name       | Description           | Restrictions              | Icon
-----------|:----------------------|:--------------------------|:---------------------------------------------------------
car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)
truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png)
scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png)
foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png)
hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png)
bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png)
mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png)
racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)

Please note:

 * all motor vehicles (`car`, `small_truck`, `truck` and `scooter`) support turn restrictions via `turn_costs=true`
 * the free package supports only the vehicle profiles `car`, `bike` or `foot`
 * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.
 * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).
 * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.
 
## TomTom

If you want to include traffic, you can purchase the TomTom Add-on.
This Add-on only uses TomTom's road network and historical traffic information.
Live traffic is not yet considered. If you are interested to learn how we consider traffic information, we recommend that you read [this article](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).

Please note the following:

 * Currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).
 * In addition to our terms, you need to accept TomTom's [End User License Aggreement](https://www.graphhopper.com/tomtom-end-user-license-agreement/).
 * We do *not* use TomTom's web services. We only use their data with our software.
 
[Contact us](https://www.graphhopper.com/contact-form/) for more details.

#### Geographical Coverage

We offer

- Europe including Russia
- North, Central and South America
- Saudi Arabia
- United Arab Emirates
- South Africa
- Australia

#### Supported Vehicle Profiles

Name       | Description           | Restrictions              | Icon
-----------|:----------------------|:--------------------------|:---------------------------------------------------------
car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [https://www.graphhopper.com/](https://www.graphhopper.com/)

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://graphhopper.com/api/1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://graphhopper.com/api/1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClusterAPIApi(api_client)
    cluster_request = openapi_client.ClusterRequest() # ClusterRequest | Request object that contains the problem to be solved

    try:
        # Batch Cluster Endpoint
        api_response = api_instance.async_clustering_problem(cluster_request)
        print("The response of ClusterAPIApi->async_clustering_problem:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ClusterAPIApi->async_clustering_problem: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://graphhopper.com/api/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ClusterAPIApi* | [**async_clustering_problem**](docs/ClusterAPIApi.md#async_clustering_problem) | **POST** /cluster/calculate | Batch Cluster Endpoint
*ClusterAPIApi* | [**get_cluster_solution**](docs/ClusterAPIApi.md#get_cluster_solution) | **GET** /cluster/solution/{jobId} | GET Batch Solution Endpoint
*ClusterAPIApi* | [**solve_clustering_problem**](docs/ClusterAPIApi.md#solve_clustering_problem) | **POST** /cluster | POST Cluster Endpoint
*GeocodingAPIApi* | [**get_geocode**](docs/GeocodingAPIApi.md#get_geocode) | **GET** /geocode | Geocoding Endpoint
*IsochroneAPIApi* | [**get_isochrone**](docs/IsochroneAPIApi.md#get_isochrone) | **GET** /isochrone | Isochrone Endpoint
*MapMatchingAPIApi* | [**post_gpx**](docs/MapMatchingAPIApi.md#post_gpx) | **POST** /match | Map-match a GPX file
*MatrixAPIApi* | [**calculate_matrix**](docs/MatrixAPIApi.md#calculate_matrix) | **POST** /matrix/calculate | Batch Matrix Endpoint
*MatrixAPIApi* | [**get_matrix**](docs/MatrixAPIApi.md#get_matrix) | **GET** /matrix | GET Matrix Endpoint
*MatrixAPIApi* | [**get_matrix_solution**](docs/MatrixAPIApi.md#get_matrix_solution) | **GET** /matrix/solution/{jobId} | GET Batch Matrix Endpoint
*MatrixAPIApi* | [**post_matrix**](docs/MatrixAPIApi.md#post_matrix) | **POST** /matrix | POST Matrix Endpoint
*RouteOptimizationAPIApi* | [**async_vrp**](docs/RouteOptimizationAPIApi.md#async_vrp) | **POST** /vrp/optimize | POST route optimization problem (batch mode)
*RouteOptimizationAPIApi* | [**get_solution**](docs/RouteOptimizationAPIApi.md#get_solution) | **GET** /vrp/solution/{jobId} | GET the solution (batch mode)
*RouteOptimizationAPIApi* | [**solve_vrp**](docs/RouteOptimizationAPIApi.md#solve_vrp) | **POST** /vrp | POST route optimization problem
*RoutingAPIApi* | [**get_route**](docs/RoutingAPIApi.md#get_route) | **GET** /route | GET Route Endpoint
*RoutingAPIApi* | [**post_route**](docs/RoutingAPIApi.md#post_route) | **POST** /route | POST Route Endpoint
*RoutingAPIApi* | [**route_info_get**](docs/RoutingAPIApi.md#route_info_get) | **GET** /route/info | Coverage information


## Documentation For Models

 - [Activity](docs/Activity.md)
 - [Address](docs/Address.md)
 - [Algorithm](docs/Algorithm.md)
 - [BadRequest](docs/BadRequest.md)
 - [Cluster](docs/Cluster.md)
 - [ClusterConfiguration](docs/ClusterConfiguration.md)
 - [ClusterConfigurationClustering](docs/ClusterConfigurationClustering.md)
 - [ClusterConfigurationRouting](docs/ClusterConfigurationRouting.md)
 - [ClusterCustomer](docs/ClusterCustomer.md)
 - [ClusterCustomerAddress](docs/ClusterCustomerAddress.md)
 - [ClusterRequest](docs/ClusterRequest.md)
 - [ClusterResponse](docs/ClusterResponse.md)
 - [Configuration](docs/Configuration.md)
 - [CostMatrix](docs/CostMatrix.md)
 - [CostMatrixData](docs/CostMatrixData.md)
 - [CostMatrixDataInfo](docs/CostMatrixDataInfo.md)
 - [Detail](docs/Detail.md)
 - [DriveTimeBreak](docs/DriveTimeBreak.md)
 - [ErrorMessage](docs/ErrorMessage.md)
 - [GHError](docs/GHError.md)
 - [GHErrorHintsInner](docs/GHErrorHintsInner.md)
 - [GeocodingLocation](docs/GeocodingLocation.md)
 - [GeocodingPoint](docs/GeocodingPoint.md)
 - [GeocodingResponse](docs/GeocodingResponse.md)
 - [GetClusterSolution404Response](docs/GetClusterSolution404Response.md)
 - [GroupRelation](docs/GroupRelation.md)
 - [InfoResponse](docs/InfoResponse.md)
 - [InternalErrorMessage](docs/InternalErrorMessage.md)
 - [IsochroneResponse](docs/IsochroneResponse.md)
 - [IsochroneResponsePolygon](docs/IsochroneResponsePolygon.md)
 - [IsochroneResponsePolygonProperties](docs/IsochroneResponsePolygonProperties.md)
 - [JobId](docs/JobId.md)
 - [JobRelation](docs/JobRelation.md)
 - [LineString](docs/LineString.md)
 - [MatrixRequest](docs/MatrixRequest.md)
 - [MatrixResponse](docs/MatrixResponse.md)
 - [MatrixResponseHintsInner](docs/MatrixResponseHintsInner.md)
 - [Objective](docs/Objective.md)
 - [Polygon](docs/Polygon.md)
 - [PostMatrixRequest](docs/PostMatrixRequest.md)
 - [Request](docs/Request.md)
 - [RequestRelationsInner](docs/RequestRelationsInner.md)
 - [Response](docs/Response.md)
 - [ResponseAddress](docs/ResponseAddress.md)
 - [ResponseInfo](docs/ResponseInfo.md)
 - [Route](docs/Route.md)
 - [RoutePoint](docs/RoutePoint.md)
 - [RouteRequest](docs/RouteRequest.md)
 - [RouteResponse](docs/RouteResponse.md)
 - [RouteResponsePath](docs/RouteResponsePath.md)
 - [RouteResponsePathInstructionsInner](docs/RouteResponsePathInstructionsInner.md)
 - [RouteResponsePathPoints](docs/RouteResponsePathPoints.md)
 - [RouteResponsePathSnappedWaypoints](docs/RouteResponsePathSnappedWaypoints.md)
 - [Routing](docs/Routing.md)
 - [Service](docs/Service.md)
 - [Shipment](docs/Shipment.md)
 - [SnappedWaypoint](docs/SnappedWaypoint.md)
 - [Solution](docs/Solution.md)
 - [SolutionUnassigned](docs/SolutionUnassigned.md)
 - [Stop](docs/Stop.md)
 - [SymmetricalMatrixRequest](docs/SymmetricalMatrixRequest.md)
 - [TimeWindow](docs/TimeWindow.md)
 - [TimeWindowBreak](docs/TimeWindowBreak.md)
 - [Vehicle](docs/Vehicle.md)
 - [VehicleBreak](docs/VehicleBreak.md)
 - [VehicleProfileId](docs/VehicleProfileId.md)
 - [VehicleType](docs/VehicleType.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="api_key"></a>
### api_key

- **Type**: API key
- **API key parameter name**: key
- **Location**: URL query string


## Author

support@graphhopper.com


