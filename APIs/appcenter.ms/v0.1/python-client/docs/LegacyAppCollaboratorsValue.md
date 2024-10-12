# LegacyAppCollaboratorsValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_current_account** | **bool** | Is current collaborator the same as current account. | [optional] 
**permission** | **str** | Which permission does current account has. | [optional] 

## Example

```python
from openapi_client.models.legacy_app_collaborators_value import LegacyAppCollaboratorsValue

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAppCollaboratorsValue from a JSON string
legacy_app_collaborators_value_instance = LegacyAppCollaboratorsValue.from_json(json)
# print the JSON string representation of the object
print(LegacyAppCollaboratorsValue.to_json())

# convert the object into a dict
legacy_app_collaborators_value_dict = legacy_app_collaborators_value_instance.to_dict()
# create an instance of LegacyAppCollaboratorsValue from a dict
legacy_app_collaborators_value_from_dict = LegacyAppCollaboratorsValue.from_dict(legacy_app_collaborators_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


