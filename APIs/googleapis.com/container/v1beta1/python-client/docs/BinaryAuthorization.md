# BinaryAuthorization

Configuration for Binary Authorization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | This field is deprecated. Leave this unset and instead configure BinaryAuthorization using evaluation_mode. If evaluation_mode is set to anything other than EVALUATION_MODE_UNSPECIFIED, this field is ignored. | [optional] 
**evaluation_mode** | **str** | Mode of operation for binauthz policy evaluation. If unspecified, defaults to DISABLED. | [optional] 
**policy_bindings** | [**List[PolicyBinding]**](PolicyBinding.md) | Optional. Binauthz policies that apply to this cluster. | [optional] 

## Example

```python
from openapi_client.models.binary_authorization import BinaryAuthorization

# TODO update the JSON string below
json = "{}"
# create an instance of BinaryAuthorization from a JSON string
binary_authorization_instance = BinaryAuthorization.from_json(json)
# print the JSON string representation of the object
print(BinaryAuthorization.to_json())

# convert the object into a dict
binary_authorization_dict = binary_authorization_instance.to_dict()
# create an instance of BinaryAuthorization from a dict
binary_authorization_from_dict = BinaryAuthorization.from_dict(binary_authorization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


