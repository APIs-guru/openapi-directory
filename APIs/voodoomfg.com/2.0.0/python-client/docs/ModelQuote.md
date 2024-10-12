# ModelQuote

Quote for a model in the given material_id, units, and quantity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**material_id** | **int** | Requested material id. | [optional] 
**model_id** | **int** | Requested model id. Not present on the response from /model/quote_attrs. | [optional] 
**options** | [**ProductionOptionsCosts**](ProductionOptionsCosts.md) |  | [optional] 
**quote** | **float** | The cost for printing the model in the requested quantity, before any additional services. | [optional] 
**unit_cost** | **float** | The cost of a single print of the specified model. | [optional] 
**units** | **str** | Units for the requested print. One of \&quot;mm\&quot;, \&quot;cm\&quot;, or \&quot;in\&quot;. | [optional] 

## Example

```python
from openapi_client.models.model_quote import ModelQuote

# TODO update the JSON string below
json = "{}"
# create an instance of ModelQuote from a JSON string
model_quote_instance = ModelQuote.from_json(json)
# print the JSON string representation of the object
print(ModelQuote.to_json())

# convert the object into a dict
model_quote_dict = model_quote_instance.to_dict()
# create an instance of ModelQuote from a dict
model_quote_from_dict = ModelQuote.from_dict(model_quote_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


