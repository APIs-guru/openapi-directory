# ModelReturn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount of the transaction to return. Must be less than or equal to the original purchase amount. | 
**order_number** | **str** | alphanumeric (30) | [optional] 

## Example

```python
from openapi_client.models.model_return import ModelReturn

# TODO update the JSON string below
json = "{}"
# create an instance of ModelReturn from a JSON string
model_return_instance = ModelReturn.from_json(json)
# print the JSON string representation of the object
print(ModelReturn.to_json())

# convert the object into a dict
model_return_dict = model_return_instance.to_dict()
# create an instance of ModelReturn from a dict
model_return_from_dict = ModelReturn.from_dict(model_return_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


