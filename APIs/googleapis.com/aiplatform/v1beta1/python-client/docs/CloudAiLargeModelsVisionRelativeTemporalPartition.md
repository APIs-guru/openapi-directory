# CloudAiLargeModelsVisionRelativeTemporalPartition

For ease of use, assume that the start_offset is inclusive and the end_offset is exclusive. In mathematical terms, the partition would be written as [start_offset, end_offset).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_offset** | **str** | End time offset of the partition. | [optional] 
**start_offset** | **str** | Start time offset of the partition. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_relative_temporal_partition import CloudAiLargeModelsVisionRelativeTemporalPartition

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionRelativeTemporalPartition from a JSON string
cloud_ai_large_models_vision_relative_temporal_partition_instance = CloudAiLargeModelsVisionRelativeTemporalPartition.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionRelativeTemporalPartition.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_relative_temporal_partition_dict = cloud_ai_large_models_vision_relative_temporal_partition_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionRelativeTemporalPartition from a dict
cloud_ai_large_models_vision_relative_temporal_partition_from_dict = CloudAiLargeModelsVisionRelativeTemporalPartition.from_dict(cloud_ai_large_models_vision_relative_temporal_partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


