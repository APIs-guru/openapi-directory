# BatchPredictOperationMetadata

Details of BatchPredict operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_config** | [**BatchPredictInputConfig**](BatchPredictInputConfig.md) |  | [optional] 
**output_info** | [**BatchPredictOutputInfo**](BatchPredictOutputInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_predict_operation_metadata import BatchPredictOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPredictOperationMetadata from a JSON string
batch_predict_operation_metadata_instance = BatchPredictOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(BatchPredictOperationMetadata.to_json())

# convert the object into a dict
batch_predict_operation_metadata_dict = batch_predict_operation_metadata_instance.to_dict()
# create an instance of BatchPredictOperationMetadata from a dict
batch_predict_operation_metadata_from_dict = BatchPredictOperationMetadata.from_dict(batch_predict_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


