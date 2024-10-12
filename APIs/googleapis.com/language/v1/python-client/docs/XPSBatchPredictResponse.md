# XPSBatchPredictResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_set** | [**XPSExampleSet**](XPSExampleSet.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_batch_predict_response import XPSBatchPredictResponse

# TODO update the JSON string below
json = "{}"
# create an instance of XPSBatchPredictResponse from a JSON string
xps_batch_predict_response_instance = XPSBatchPredictResponse.from_json(json)
# print the JSON string representation of the object
print(XPSBatchPredictResponse.to_json())

# convert the object into a dict
xps_batch_predict_response_dict = xps_batch_predict_response_instance.to_dict()
# create an instance of XPSBatchPredictResponse from a dict
xps_batch_predict_response_from_dict = XPSBatchPredictResponse.from_dict(xps_batch_predict_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


