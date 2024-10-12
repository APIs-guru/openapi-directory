# ActivationKeyResult

The resource containing the Azure Stack activation key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_key** | **str** | Azure Stack activation key. | [optional] 

## Example

```python
from openapi_client.models.activation_key_result import ActivationKeyResult

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationKeyResult from a JSON string
activation_key_result_instance = ActivationKeyResult.from_json(json)
# print the JSON string representation of the object
print(ActivationKeyResult.to_json())

# convert the object into a dict
activation_key_result_dict = activation_key_result_instance.to_dict()
# create an instance of ActivationKeyResult from a dict
activation_key_result_from_dict = ActivationKeyResult.from_dict(activation_key_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


