# CoreResource

Marker resource for the core Service Map resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Resource ETAG. | [optional] 
**kind** | **str** | Additional resource type qualifier. | 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.core_resource import CoreResource

# TODO update the JSON string below
json = "{}"
# create an instance of CoreResource from a JSON string
core_resource_instance = CoreResource.from_json(json)
# print the JSON string representation of the object
print(CoreResource.to_json())

# convert the object into a dict
core_resource_dict = core_resource_instance.to_dict()
# create an instance of CoreResource from a dict
core_resource_from_dict = CoreResource.from_dict(core_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


