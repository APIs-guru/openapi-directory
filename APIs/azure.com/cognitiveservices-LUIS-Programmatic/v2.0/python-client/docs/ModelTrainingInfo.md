# ModelTrainingInfo

Model Training Info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**ModelTrainingDetails**](ModelTrainingDetails.md) |  | [optional] 
**model_id** | **str** | The ID (GUID) of the model. | [optional] 

## Example

```python
from openapi_client.models.model_training_info import ModelTrainingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModelTrainingInfo from a JSON string
model_training_info_instance = ModelTrainingInfo.from_json(json)
# print the JSON string representation of the object
print(ModelTrainingInfo.to_json())

# convert the object into a dict
model_training_info_dict = model_training_info_instance.to_dict()
# create an instance of ModelTrainingInfo from a dict
model_training_info_from_dict = ModelTrainingInfo.from_dict(model_training_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


