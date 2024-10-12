# ArtifactMetaData



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_id** | **int** |  | 
**created_by** | **str** |  | 
**created_on** | **datetime** |  | 
**description** | **str** |  | [optional] 
**global_id** | **int** |  | 
**group_id** | **str** | An ID of a single artifact group. | [optional] 
**id** | **str** | The ID of a single artifact. | 
**labels** | **List[str]** |  | [optional] 
**modified_by** | **str** |  | 
**modified_on** | **datetime** |  | 
**name** | **str** |  | [optional] 
**properties** | **Dict[str, str]** | User-defined name-value pairs. Name and value must be strings. | [optional] 
**references** | [**List[ArtifactReference]**](ArtifactReference.md) |  | [optional] 
**state** | [**ArtifactState**](ArtifactState.md) |  | 
**type** | **str** |  | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.artifact_meta_data import ArtifactMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactMetaData from a JSON string
artifact_meta_data_instance = ArtifactMetaData.from_json(json)
# print the JSON string representation of the object
print(ArtifactMetaData.to_json())

# convert the object into a dict
artifact_meta_data_dict = artifact_meta_data_instance.to_dict()
# create an instance of ArtifactMetaData from a dict
artifact_meta_data_from_dict = ArtifactMetaData.from_dict(artifact_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


