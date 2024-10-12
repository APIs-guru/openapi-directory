# NoEncryption

Class for NoEncryption scheme

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_protocols** | [**EnabledProtocols**](EnabledProtocols.md) |  | [optional] 

## Example

```python
from openapi_client.models.no_encryption import NoEncryption

# TODO update the JSON string below
json = "{}"
# create an instance of NoEncryption from a JSON string
no_encryption_instance = NoEncryption.from_json(json)
# print the JSON string representation of the object
print(NoEncryption.to_json())

# convert the object into a dict
no_encryption_dict = no_encryption_instance.to_dict()
# create an instance of NoEncryption from a dict
no_encryption_from_dict = NoEncryption.from_dict(no_encryption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


