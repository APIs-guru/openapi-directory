# MapsListOperationsDefaultResponse

The resource management error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | [**List[MapsListOperationsDefaultResponseAdditionalInfoInner]**](MapsListOperationsDefaultResponseAdditionalInfoInner.md) | The error additional info. | [optional] [readonly] 
**code** | **str** | The error code. | [optional] [readonly] 
**details** | **List[object]** | The error details. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] [readonly] 
**target** | **str** | The error target. | [optional] [readonly] 

## Example

```python
from openapi_client.models.maps_list_operations_default_response import MapsListOperationsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MapsListOperationsDefaultResponse from a JSON string
maps_list_operations_default_response_instance = MapsListOperationsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(MapsListOperationsDefaultResponse.to_json())

# convert the object into a dict
maps_list_operations_default_response_dict = maps_list_operations_default_response_instance.to_dict()
# create an instance of MapsListOperationsDefaultResponse from a dict
maps_list_operations_default_response_from_dict = MapsListOperationsDefaultResponse.from_dict(maps_list_operations_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


