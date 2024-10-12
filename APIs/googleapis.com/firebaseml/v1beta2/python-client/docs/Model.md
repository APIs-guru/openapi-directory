# Model

An ML model hosted in Firebase ML

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_operations** | [**List[Operation]**](Operation.md) | Output only. Lists operation ids associated with this model whose status is NOT done. | [optional] [readonly] 
**create_time** | **str** | Output only. Timestamp when this model was created in Firebase ML. | [optional] [readonly] 
**display_name** | **str** | Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter. | [optional] 
**etag** | **str** | Output only. See RFC7232 https://tools.ietf.org/html/rfc7232#section-2.3 | [optional] [readonly] 
**model_hash** | **str** | Output only. The model_hash will change if a new file is available for download. | [optional] [readonly] 
**name** | **str** | The resource name of the Model. Model names have the form &#x60;projects/{project_id}/models/{model_id}&#x60; The name is ignored when creating a model. | [optional] 
**state** | [**ModelState**](ModelState.md) |  | [optional] 
**tags** | **List[str]** | User defined tags which can be used to group/filter models during listing | [optional] 
**tflite_model** | [**TfLiteModel**](TfLiteModel.md) |  | [optional] 
**update_time** | **str** | Output only. Timestamp when this model was updated in Firebase ML. | [optional] [readonly] 

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


