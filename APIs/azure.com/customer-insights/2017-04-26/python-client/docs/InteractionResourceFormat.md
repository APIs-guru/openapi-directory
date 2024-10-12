# InteractionResourceFormat

The interaction resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**InteractionTypeDefinition**](InteractionTypeDefinition.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.interaction_resource_format import InteractionResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of InteractionResourceFormat from a JSON string
interaction_resource_format_instance = InteractionResourceFormat.from_json(json)
# print the JSON string representation of the object
print(InteractionResourceFormat.to_json())

# convert the object into a dict
interaction_resource_format_dict = interaction_resource_format_instance.to_dict()
# create an instance of InteractionResourceFormat from a dict
interaction_resource_format_from_dict = InteractionResourceFormat.from_dict(interaction_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


