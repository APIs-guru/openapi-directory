# Model

A trained translation model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp when the model resource was created, which is also when the training started. | [optional] [readonly] 
**dataset** | **str** | The dataset from which the model is trained, in form of &#x60;projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}&#x60; | [optional] 
**display_name** | **str** | The name of the model to show in the interface. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores (_), and ASCII digits 0-9. | [optional] 
**name** | **str** | The resource name of the model, in form of &#x60;projects/{project-number-or-id}/locations/{location_id}/models/{model_id}&#x60; | [optional] 
**source_language_code** | **str** | Output only. The BCP-47 language code of the source language. | [optional] [readonly] 
**target_language_code** | **str** | Output only. The BCP-47 language code of the target language. | [optional] [readonly] 
**test_example_count** | **int** | Output only. Number of examples (sentence pairs) used to test the model. | [optional] [readonly] 
**train_example_count** | **int** | Output only. Number of examples (sentence pairs) used to train the model. | [optional] [readonly] 
**update_time** | **str** | Output only. Timestamp when this model was last updated. | [optional] [readonly] 
**validate_example_count** | **int** | Output only. Number of examples (sentence pairs) used to validate the model. | [optional] [readonly] 

## Example

```python
from openapi_client.models.model import Model

# TODO update the JSON string below
json = "{}"
# create an instance of Model from a JSON string
model_instance = Model.from_json(json)
# print the JSON string representation of the object
print(Model.to_json())

# convert the object into a dict
model_dict = model_instance.to_dict()
# create an instance of Model from a dict
model_from_dict = Model.from_dict(model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


