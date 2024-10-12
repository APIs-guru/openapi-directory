# XPSVideoBatchPredictOperationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_examples** | **List[str]** | All the partial batch prediction results that are completed at the moment. Output examples are sorted by completion time. The order will not be changed. Each output example should be the path of a single RecordIO file of AnnotatedExamples. | [optional] 

## Example

```python
from openapi_client.models.xps_video_batch_predict_operation_metadata import XPSVideoBatchPredictOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoBatchPredictOperationMetadata from a JSON string
xps_video_batch_predict_operation_metadata_instance = XPSVideoBatchPredictOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSVideoBatchPredictOperationMetadata.to_json())

# convert the object into a dict
xps_video_batch_predict_operation_metadata_dict = xps_video_batch_predict_operation_metadata_instance.to_dict()
# create an instance of XPSVideoBatchPredictOperationMetadata from a dict
xps_video_batch_predict_operation_metadata_from_dict = XPSVideoBatchPredictOperationMetadata.from_dict(xps_video_batch_predict_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


