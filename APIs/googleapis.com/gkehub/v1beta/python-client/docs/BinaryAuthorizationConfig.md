# BinaryAuthorizationConfig

BinaryAuthorizationConfig defines the fleet level configuration of binary authorization feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluation_mode** | **str** | Optional. Mode of operation for binauthz policy evaluation. | [optional] 
**policy_bindings** | [**List[PolicyBinding]**](PolicyBinding.md) | Optional. Binauthz policies that apply to this cluster. | [optional] 

## Example

```python
from openapi_client.models.binary_authorization_config import BinaryAuthorizationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BinaryAuthorizationConfig from a JSON string
binary_authorization_config_instance = BinaryAuthorizationConfig.from_json(json)
# print the JSON string representation of the object
print(BinaryAuthorizationConfig.to_json())

# convert the object into a dict
binary_authorization_config_dict = binary_authorization_config_instance.to_dict()
# create an instance of BinaryAuthorizationConfig from a dict
binary_authorization_config_from_dict = BinaryAuthorizationConfig.from_dict(binary_authorization_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


