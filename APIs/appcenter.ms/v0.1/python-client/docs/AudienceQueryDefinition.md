# AudienceQueryDefinition

Audience Query definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifiers** | **List[str]** | List of identifiers. | [optional] 
**query_type** | **str** | Audience Query Type | 

## Example

```python
from openapi_client.models.audience_query_definition import AudienceQueryDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AudienceQueryDefinition from a JSON string
audience_query_definition_instance = AudienceQueryDefinition.from_json(json)
# print the JSON string representation of the object
print(AudienceQueryDefinition.to_json())

# convert the object into a dict
audience_query_definition_dict = audience_query_definition_instance.to_dict()
# create an instance of AudienceQueryDefinition from a dict
audience_query_definition_from_dict = AudienceQueryDefinition.from_dict(audience_query_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


