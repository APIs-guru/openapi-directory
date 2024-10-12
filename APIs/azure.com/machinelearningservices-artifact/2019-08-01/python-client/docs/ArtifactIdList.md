# ArtifactIdList

Contains list of Artifact Ids.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_ids** | **List[str]** | List of Artifacts Ids. | 

## Example

```python
from openapi_client.models.artifact_id_list import ArtifactIdList

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactIdList from a JSON string
artifact_id_list_instance = ArtifactIdList.from_json(json)
# print the JSON string representation of the object
print(ArtifactIdList.to_json())

# convert the object into a dict
artifact_id_list_dict = artifact_id_list_instance.to_dict()
# create an instance of ArtifactIdList from a dict
artifact_id_list_from_dict = ArtifactIdList.from_dict(artifact_id_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


