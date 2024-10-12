# ServiceTemplate


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
**protocol** | [**Protocol**](Protocol.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_template import ServiceTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceTemplate from a JSON string
service_template_instance = ServiceTemplate.from_json(json)
# print the JSON string representation of the object
print(ServiceTemplate.to_json())

# convert the object into a dict
service_template_dict = service_template_instance.to_dict()
# create an instance of ServiceTemplate from a dict
service_template_from_dict = ServiceTemplate.from_dict(service_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


