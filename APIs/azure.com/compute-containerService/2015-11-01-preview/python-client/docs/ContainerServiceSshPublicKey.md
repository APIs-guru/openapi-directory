# ContainerServiceSshPublicKey

Contains information about SSH certificate public key data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_data** | **str** | Gets or sets Certificate public key used to authenticate with VM through SSH. The certificate must be in Pem format with or without headers. | 

## Example

```python
from openapi_client.models.container_service_ssh_public_key import ContainerServiceSshPublicKey

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceSshPublicKey from a JSON string
container_service_ssh_public_key_instance = ContainerServiceSshPublicKey.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceSshPublicKey.to_json())

# convert the object into a dict
container_service_ssh_public_key_dict = container_service_ssh_public_key_instance.to_dict()
# create an instance of ContainerServiceSshPublicKey from a dict
container_service_ssh_public_key_from_dict = ContainerServiceSshPublicKey.from_dict(container_service_ssh_public_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


