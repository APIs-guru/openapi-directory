# ModelState

State common to all model types. Includes publishing and validation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**published** | **bool** | Indicates if this model has been published. | [optional] 
**validation_error** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.model_state import ModelState

# TODO update the JSON string below
json = "{}"
# create an instance of ModelState from a JSON string
model_state_instance = ModelState.from_json(json)
# print the JSON string representation of the object
print(ModelState.to_json())

# convert the object into a dict
model_state_dict = model_state_instance.to_dict()
# create an instance of ModelState from a dict
model_state_from_dict = ModelState.from_dict(model_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


