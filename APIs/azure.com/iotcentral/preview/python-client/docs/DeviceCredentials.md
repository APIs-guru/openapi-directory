# DeviceCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope_id** | **str** | Scope id for connecting to device provisioning service. | 
**symmetric_key** | [**SymmetricKey**](SymmetricKey.md) |  | 

## Example

```python
from openapi_client.models.device_credentials import DeviceCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCredentials from a JSON string
device_credentials_instance = DeviceCredentials.from_json(json)
# print the JSON string representation of the object
print(DeviceCredentials.to_json())

# convert the object into a dict
device_credentials_dict = device_credentials_instance.to_dict()
# create an instance of DeviceCredentials from a dict
device_credentials_from_dict = DeviceCredentials.from_dict(device_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


