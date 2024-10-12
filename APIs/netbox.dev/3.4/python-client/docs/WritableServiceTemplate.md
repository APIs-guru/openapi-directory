# WritableServiceTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**ports** | **List[int]** |  | 
**protocol** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_service_template import WritableServiceTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableServiceTemplate from a JSON string
writable_service_template_instance = WritableServiceTemplate.from_json(json)
# print the JSON string representation of the object
print(WritableServiceTemplate.to_json())

# convert the object into a dict
writable_service_template_dict = writable_service_template_instance.to_dict()
# create an instance of WritableServiceTemplate from a dict
writable_service_template_from_dict = WritableServiceTemplate.from_dict(writable_service_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


