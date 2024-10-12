# LegacyCollaborators


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collaborators** | [**Dict[str, LegacyAppCollaboratorsValue]**](LegacyAppCollaboratorsValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.legacy_collaborators import LegacyCollaborators

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyCollaborators from a JSON string
legacy_collaborators_instance = LegacyCollaborators.from_json(json)
# print the JSON string representation of the object
print(LegacyCollaborators.to_json())

# convert the object into a dict
legacy_collaborators_dict = legacy_collaborators_instance.to_dict()
# create an instance of LegacyCollaborators from a dict
legacy_collaborators_from_dict = LegacyCollaborators.from_dict(legacy_collaborators_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


