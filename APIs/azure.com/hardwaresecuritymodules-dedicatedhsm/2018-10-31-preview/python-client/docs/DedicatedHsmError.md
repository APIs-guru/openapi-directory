# DedicatedHsmError

The error exception.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | [optional] 

## Example

```python
from openapi_client.models.dedicated_hsm_error import DedicatedHsmError

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHsmError from a JSON string
dedicated_hsm_error_instance = DedicatedHsmError.from_json(json)
# print the JSON string representation of the object
print(DedicatedHsmError.to_json())

# convert the object into a dict
dedicated_hsm_error_dict = dedicated_hsm_error_instance.to_dict()
# create an instance of DedicatedHsmError from a dict
dedicated_hsm_error_from_dict = DedicatedHsmError.from_dict(dedicated_hsm_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


