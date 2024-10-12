# ErrorInvalidParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_invalid_parameters import ErrorInvalidParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorInvalidParameters from a JSON string
error_invalid_parameters_instance = ErrorInvalidParameters.from_json(json)
# print the JSON string representation of the object
print(ErrorInvalidParameters.to_json())

# convert the object into a dict
error_invalid_parameters_dict = error_invalid_parameters_instance.to_dict()
# create an instance of ErrorInvalidParameters from a dict
error_invalid_parameters_from_dict = ErrorInvalidParameters.from_dict(error_invalid_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


