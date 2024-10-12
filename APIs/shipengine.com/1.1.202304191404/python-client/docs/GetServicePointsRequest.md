# GetServicePointsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**GetServicePointsRequestBodyAddress**](GetServicePointsRequestBodyAddress.md) |  | [optional] 
**address_query** | **str** | Unstructured text to search for service points by. | [optional] 
**lat** | **float** | The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html | [optional] 
**long** | **float** | The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html | [optional] 
**max_results** | **int** | The maximum number of service points to return | [optional] 
**providers** | [**List[GetServicePointsRequestBodyProvidersInner]**](GetServicePointsRequestBodyProvidersInner.md) | An array of shipping service providers and service codes | 
**radius** | **int** | Search radius in kilometers | [optional] 

## Example

```python
from openapi_client.models.get_service_points_request import GetServicePointsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetServicePointsRequest from a JSON string
get_service_points_request_instance = GetServicePointsRequest.from_json(json)
# print the JSON string representation of the object
print(GetServicePointsRequest.to_json())

# convert the object into a dict
get_service_points_request_dict = get_service_points_request_instance.to_dict()
# create an instance of GetServicePointsRequest from a dict
get_service_points_request_from_dict = GetServicePointsRequest.from_dict(get_service_points_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


