# CustomApiDefinition

A custom API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CustomApiPropertiesDefinition**](CustomApiPropertiesDefinition.md) |  | [optional] 
**etag** | **str** | Resource ETag | [optional] 
**id** | **str** | Resource id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_api_definition import CustomApiDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CustomApiDefinition from a JSON string
custom_api_definition_instance = CustomApiDefinition.from_json(json)
# print the JSON string representation of the object
print(CustomApiDefinition.to_json())

# convert the object into a dict
custom_api_definition_dict = custom_api_definition_instance.to_dict()
# create an instance of CustomApiDefinition from a dict
custom_api_definition_from_dict = CustomApiDefinition.from_dict(custom_api_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


