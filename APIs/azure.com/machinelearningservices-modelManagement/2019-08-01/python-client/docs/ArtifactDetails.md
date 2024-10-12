# ArtifactDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**prefix** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.artifact_details import ArtifactDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ArtifactDetails from a JSON string
artifact_details_instance = ArtifactDetails.from_json(json)
# print the JSON string representation of the object
print(ArtifactDetails.to_json())

# convert the object into a dict
artifact_details_dict = artifact_details_instance.to_dict()
# create an instance of ArtifactDetails from a dict
artifact_details_from_dict = ArtifactDetails.from_dict(artifact_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


