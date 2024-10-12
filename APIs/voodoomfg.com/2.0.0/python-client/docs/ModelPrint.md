# ModelPrint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**material_id** | **int** | The unique identifier of the material you&#39;d like to print in. This value comes from the id field of the material object. | [optional] 
**model_id** | **int** | The unique identifier of the model you&#39;d like to print. This value comes from the id field of the model object. | [optional] 
**options** | [**ProductionOptions**](ProductionOptions.md) |  | [optional] 
**quantity** | **int** | The number of prints to order for this material/model pair. | [optional] 
**units** | **str** | The units of the model file. Either \&quot;mm\&quot;, \&quot;cm\&quot;, or \&quot;in\&quot;. The correct value to pass here depends on which design program you&#39;re using. Defaults to \&quot;mm\&quot;. | [optional] 

## Example

```python
from openapi_client.models.model_print import ModelPrint

# TODO update the JSON string below
json = "{}"
# create an instance of ModelPrint from a JSON string
model_print_instance = ModelPrint.from_json(json)
# print the JSON string representation of the object
print(ModelPrint.to_json())

# convert the object into a dict
model_print_dict = model_print_instance.to_dict()
# create an instance of ModelPrint from a dict
model_print_from_dict = ModelPrint.from_dict(model_print_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


