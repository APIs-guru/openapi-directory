# ArtifactRule

Defines an object to declare an in-toto artifact rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_rule** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.artifact_rule import ArtifactRule

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactRule from a JSON string
artifact_rule_instance = ArtifactRule.from_json(json)
# print the JSON string representation of the object
print(ArtifactRule.to_json())

# convert the object into a dict
artifact_rule_dict = artifact_rule_instance.to_dict()
# create an instance of ArtifactRule from a dict
artifact_rule_from_dict = ArtifactRule.from_dict(artifact_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


