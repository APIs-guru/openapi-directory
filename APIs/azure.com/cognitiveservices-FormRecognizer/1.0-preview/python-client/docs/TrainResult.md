# TrainResult

Response of the Train API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[FormOperationError]**](FormOperationError.md) | Errors returned during the training operation. | [optional] 
**model_id** | **str** | Identifier of the model. | [optional] 
**training_documents** | [**List[FormDocumentReport]**](FormDocumentReport.md) | List of documents used to train the model and the  train operation error reported by each. | [optional] 

## Example

```python
from openapi_client.models.train_result import TrainResult

# TODO update the JSON string below
json = "{}"
# create an instance of TrainResult from a JSON string
train_result_instance = TrainResult.from_json(json)
# print the JSON string representation of the object
print(TrainResult.to_json())

# convert the object into a dict
train_result_dict = train_result_instance.to_dict()
# create an instance of TrainResult from a dict
train_result_from_dict = TrainResult.from_dict(train_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


