# EnqueueTrainingResponse

Response model when requesting to train the model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**TrainingStatus**](TrainingStatus.md) |  | [optional] 
**status_id** | **int** | The train request status ID. | [optional] 

## Example

```python
from openapi_client.models.enqueue_training_response import EnqueueTrainingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EnqueueTrainingResponse from a JSON string
enqueue_training_response_instance = EnqueueTrainingResponse.from_json(json)
# print the JSON string representation of the object
print(EnqueueTrainingResponse.to_json())

# convert the object into a dict
enqueue_training_response_dict = enqueue_training_response_instance.to_dict()
# create an instance of EnqueueTrainingResponse from a dict
enqueue_training_response_from_dict = EnqueueTrainingResponse.from_dict(enqueue_training_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


