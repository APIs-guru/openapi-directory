# ArtifactSourceList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[ArtifactSource]**](ArtifactSource.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.artifact_source_list import ArtifactSourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactSourceList from a JSON string
artifact_source_list_instance = ArtifactSourceList.from_json(json)
# print the JSON string representation of the object
print(ArtifactSourceList.to_json())

# convert the object into a dict
artifact_source_list_dict = artifact_source_list_instance.to_dict()
# create an instance of ArtifactSourceList from a dict
artifact_source_list_from_dict = ArtifactSourceList.from_dict(artifact_source_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


