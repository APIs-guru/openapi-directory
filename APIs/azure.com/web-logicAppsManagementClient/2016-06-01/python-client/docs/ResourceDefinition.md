# ResourceDefinition

A resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Resource ETag | [optional] 
**id** | **str** | Resource id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_definition import ResourceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceDefinition from a JSON string
resource_definition_instance = ResourceDefinition.from_json(json)
# print the JSON string representation of the object
print(ResourceDefinition.to_json())

# convert the object into a dict
resource_definition_dict = resource_definition_instance.to_dict()
# create an instance of ResourceDefinition from a dict
resource_definition_from_dict = ResourceDefinition.from_dict(resource_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


