# ModelResult

Result of a model status query operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date_time** | **datetime** | Get or set the created date time of the model. | [optional] 
**last_updated_date_time** | **datetime** | Get or set the model last updated datetime. | [optional] 
**model_id** | **str** | Get or set model identifier. | [optional] 
**status** | **str** | Get or set the status of model. | [optional] 

## Example

```python
from openapi_client.models.model_result import ModelResult

# TODO update the JSON string below
json = "{}"
# create an instance of ModelResult from a JSON string
model_result_instance = ModelResult.from_json(json)
# print the JSON string representation of the object
print(ModelResult.to_json())

# convert the object into a dict
model_result_dict = model_result_instance.to_dict()
# create an instance of ModelResult from a dict
model_result_from_dict = ModelResult.from_dict(model_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


