# GetServicePointsRequestBodyAddress

Structured address to search by.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_line1** | **str** |  | [optional] 
**address_line2** | **str** |  | [optional] 
**address_line3** | **str** |  | [optional] 
**city_locality** | **str** |  | [optional] 
**country_code** | **str** |  | 
**postal_code** | **str** |  | [optional] 
**state_province** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_service_points_request_body_address import GetServicePointsRequestBodyAddress

# TODO update the JSON string below
json = "{}"
# create an instance of GetServicePointsRequestBodyAddress from a JSON string
get_service_points_request_body_address_instance = GetServicePointsRequestBodyAddress.from_json(json)
# print the JSON string representation of the object
print(GetServicePointsRequestBodyAddress.to_json())

# convert the object into a dict
get_service_points_request_body_address_dict = get_service_points_request_body_address_instance.to_dict()
# create an instance of GetServicePointsRequestBodyAddress from a dict
get_service_points_request_body_address_from_dict = GetServicePointsRequestBodyAddress.from_dict(get_service_points_request_body_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


