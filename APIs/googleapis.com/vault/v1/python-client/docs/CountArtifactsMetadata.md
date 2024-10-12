# CountArtifactsMetadata

Long running operation metadata for CountArtifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | End time of count operation. Available when operation is done. | [optional] 
**matter_id** | **str** | The matter ID of the associated matter. | [optional] 
**query** | [**Query**](Query.md) |  | [optional] 
**start_time** | **str** | Creation time of count operation. | [optional] 

## Example

```python
from openapi_client.models.count_artifacts_metadata import CountArtifactsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CountArtifactsMetadata from a JSON string
count_artifacts_metadata_instance = CountArtifactsMetadata.from_json(json)
# print the JSON string representation of the object
print(CountArtifactsMetadata.to_json())

# convert the object into a dict
count_artifacts_metadata_dict = count_artifacts_metadata_instance.to_dict()
# create an instance of CountArtifactsMetadata from a dict
count_artifacts_metadata_from_dict = CountArtifactsMetadata.from_dict(count_artifacts_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


