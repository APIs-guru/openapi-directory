# ActivationError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Optional error code | [optional] 
**failures** | [**List[ProductFailure]**](ProductFailure.md) |  | [optional] 
**var_field** | **str** | The input field that the error was related to | [optional] 
**message** | **str** | Optional error message | [optional] 

## Example

```python
from openapi_client.models.activation_error import ActivationError

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationError from a JSON string
activation_error_instance = ActivationError.from_json(json)
# print the JSON string representation of the object
print(ActivationError.to_json())

# convert the object into a dict
activation_error_dict = activation_error_instance.to_dict()
# create an instance of ActivationError from a dict
activation_error_from_dict = ActivationError.from_dict(activation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


