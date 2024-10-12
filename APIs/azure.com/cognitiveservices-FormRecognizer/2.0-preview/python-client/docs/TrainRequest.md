# TrainRequest

Request parameter to train a new custom model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | Source path containing the training documents. | 
**source_filter** | [**TrainSourceFilter**](TrainSourceFilter.md) |  | [optional] 
**use_label_file** | **bool** | Use label file for training a model. | [optional] [default to False]

## Example

```python
from openapi_client.models.train_request import TrainRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TrainRequest from a JSON string
train_request_instance = TrainRequest.from_json(json)
# print the JSON string representation of the object
print(TrainRequest.to_json())

# convert the object into a dict
train_request_dict = train_request_instance.to_dict()
# create an instance of TrainRequest from a dict
train_request_from_dict = TrainRequest.from_dict(train_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


