# PublicKeysProperties

This contains the data about the public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_data** | **str** | This is the SSH public key certificate used to authenticate with the VM. | [optional] 
**path** | **str** | This specifies the full path on the VM where the SSH public key is stored. | [optional] 

## Example

```python
from openapi_client.models.public_keys_properties import PublicKeysProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKeysProperties from a JSON string
public_keys_properties_instance = PublicKeysProperties.from_json(json)
# print the JSON string representation of the object
print(PublicKeysProperties.to_json())

# convert the object into a dict
public_keys_properties_dict = public_keys_properties_instance.to_dict()
# create an instance of PublicKeysProperties from a dict
public_keys_properties_from_dict = PublicKeysProperties.from_dict(public_keys_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


