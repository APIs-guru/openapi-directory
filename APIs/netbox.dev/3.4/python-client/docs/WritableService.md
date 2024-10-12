# WritableService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**ipaddresses** | **List[int]** |  | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**ports** | **List[int]** |  | 
**protocol** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**virtual_machine** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.writable_service import WritableService

# TODO update the JSON string below
json = "{}"
# create an instance of WritableService from a JSON string
writable_service_instance = WritableService.from_json(json)
# print the JSON string representation of the object
print(WritableService.to_json())

# convert the object into a dict
writable_service_dict = writable_service_instance.to_dict()
# create an instance of WritableService from a dict
writable_service_from_dict = WritableService.from_dict(writable_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


