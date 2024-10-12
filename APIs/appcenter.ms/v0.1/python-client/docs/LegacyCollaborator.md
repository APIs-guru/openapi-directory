# LegacyCollaborator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_current_account** | **bool** | Is current collaborator the same as current account. | [optional] 
**permission** | **str** | Which permission does current account has. | [optional] 

## Example

```python
from openapi_client.models.legacy_collaborator import LegacyCollaborator

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyCollaborator from a JSON string
legacy_collaborator_instance = LegacyCollaborator.from_json(json)
# print the JSON string representation of the object
print(LegacyCollaborator.to_json())

# convert the object into a dict
legacy_collaborator_dict = legacy_collaborator_instance.to_dict()
# create an instance of LegacyCollaborator from a dict
legacy_collaborator_from_dict = LegacyCollaborator.from_dict(legacy_collaborator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


