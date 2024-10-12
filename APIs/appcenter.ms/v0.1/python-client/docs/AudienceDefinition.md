# AudienceDefinition

Audience definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_properties** | **Dict[str, str]** | Custom properties used in the definition. | [optional] 
**definition** | **str** | Audience definition in OData format. | 
**description** | **str** | Audience description. | [optional] 
**enabled** | **bool** |  | [optional] [default to True]

## Example

```python
from openapi_client.models.audience_definition import AudienceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceDefinition from a JSON string
audience_definition_instance = AudienceDefinition.from_json(json)
# print the JSON string representation of the object
print(AudienceDefinition.to_json())

# convert the object into a dict
audience_definition_dict = audience_definition_instance.to_dict()
# create an instance of AudienceDefinition from a dict
audience_definition_from_dict = AudienceDefinition.from_dict(audience_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


