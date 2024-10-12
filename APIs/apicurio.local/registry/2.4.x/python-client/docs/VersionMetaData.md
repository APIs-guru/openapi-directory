# VersionMetaData



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
**name** | **str** |  | [optional] 
**properties** | **Dict[str, str]** | User-defined name-value pairs. Name and value must be strings. | [optional] 
**state** | [**ArtifactState**](ArtifactState.md) |  | [optional] 
**type** | **str** |  | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.version_meta_data import VersionMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of VersionMetaData from a JSON string
version_meta_data_instance = VersionMetaData.from_json(json)
# print the JSON string representation of the object
print(VersionMetaData.to_json())

# convert the object into a dict
version_meta_data_dict = version_meta_data_instance.to_dict()
# create an instance of VersionMetaData from a dict
version_meta_data_from_dict = VersionMetaData.from_dict(version_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


