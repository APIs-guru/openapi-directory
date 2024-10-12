# BatchPredictResult

Result of the Batch Predict. This message is returned in response of the operation returned by the PredictionService.BatchPredict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, str]** | Additional domain-specific prediction response metadata. * For Image Object Detection: &#x60;max_bounding_box_count&#x60; - (int64) At most that many bounding boxes per image could have been returned. * For Video Object Tracking: &#x60;max_bounding_box_count&#x60; - (int64) At most that many bounding boxes per frame could have been returned. | [optional] 

## Example

```python
from openapi_client.models.batch_predict_result import BatchPredictResult

# TODO update the JSON string below
json = "{}"
# create an instance of BatchPredictResult from a JSON string
batch_predict_result_instance = BatchPredictResult.from_json(json)
# print the JSON string representation of the object
print(BatchPredictResult.to_json())

# convert the object into a dict
batch_predict_result_dict = batch_predict_result_instance.to_dict()
# create an instance of BatchPredictResult from a dict
batch_predict_result_from_dict = BatchPredictResult.from_dict(batch_predict_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


