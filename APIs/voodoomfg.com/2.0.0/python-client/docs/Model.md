# Model


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The unique identifier for this model. Use this value when submitting an order to specify the model you want to print. | [optional] 
**rendering_url** | **str** | (reserved) URL with a rendering of the model. Value is null until the rendering is completed. | [optional] 
**surface_area** | **float** | The unitless surface area of the submitted model. This is calculated when the model is created. | [optional] 
**volume** | **float** | The unitless volume of the submitted model. This is calculated when the model is created. | [optional] 
**x** | **float** | The unitless x-axis length of the model&#39;s bounding box. This is calculated when the model is created. | [optional] 
**y** | **float** | The unitless y-axis length of the model&#39;s bounding box. This is calculated when the model is created. | [optional] 
**z** | **float** | The unitless z-axis length of the model&#39;s bounding box. This is calculated when the model is created. | [optional] 

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


