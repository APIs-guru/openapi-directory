# GetServicePointsRequestBody

A get service points request body. Caller must provide exactly one of address_query, address, or lat / long pair.

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
from openapi_client.models.get_service_points_request_body import GetServicePointsRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetServicePointsRequestBody from a JSON string
get_service_points_request_body_instance = GetServicePointsRequestBody.from_json(json)
# print the JSON string representation of the object
print(GetServicePointsRequestBody.to_json())

# convert the object into a dict
get_service_points_request_body_dict = get_service_points_request_body_instance.to_dict()
# create an instance of GetServicePointsRequestBody from a dict
get_service_points_request_body_from_dict = GetServicePointsRequestBody.from_dict(get_service_points_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


