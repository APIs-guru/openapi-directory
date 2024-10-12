# XPSXpsOperationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_count** | **str** | Optional. XPS server can opt to provide example count of the long running operation (e.g. training, data importing, batch prediction). | [optional] 
**reporting_metrics** | [**XPSReportingMetrics**](XPSReportingMetrics.md) |  | [optional] 
**tables_training_operation_metadata** | [**XPSTablesTrainingOperationMetadata**](XPSTablesTrainingOperationMetadata.md) |  | [optional] 
**video_batch_predict_operation_metadata** | [**XPSVideoBatchPredictOperationMetadata**](XPSVideoBatchPredictOperationMetadata.md) |  | [optional] 
**video_training_operation_metadata** | [**XPSVideoTrainingOperationMetadata**](XPSVideoTrainingOperationMetadata.md) |  | [optional] 
**vision_training_operation_metadata** | [**XPSVisionTrainingOperationMetadata**](XPSVisionTrainingOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_xps_operation_metadata import XPSXpsOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSXpsOperationMetadata from a JSON string
xps_xps_operation_metadata_instance = XPSXpsOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSXpsOperationMetadata.to_json())

# convert the object into a dict
xps_xps_operation_metadata_dict = xps_xps_operation_metadata_instance.to_dict()
# create an instance of XPSXpsOperationMetadata from a dict
xps_xps_operation_metadata_from_dict = XPSXpsOperationMetadata.from_dict(xps_xps_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


