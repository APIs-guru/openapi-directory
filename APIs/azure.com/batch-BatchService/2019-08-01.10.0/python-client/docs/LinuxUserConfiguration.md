# LinuxUserConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **int** | The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid. | [optional] 
**ssh_private_key** | **str** | The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between Compute Nodes in a Linux Pool when the Pool&#39;s enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user&#39;s .ssh directory. If not specified, password-less SSH is not configured between Compute Nodes (no modification of the user&#39;s .ssh directory is done). | [optional] 
**uid** | **int** | The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid. | [optional] 

## Example

```python
from openapi_client.models.linux_user_configuration import LinuxUserConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of LinuxUserConfiguration from a JSON string
linux_user_configuration_instance = LinuxUserConfiguration.from_json(json)
# print the JSON string representation of the object
print(LinuxUserConfiguration.to_json())

# convert the object into a dict
linux_user_configuration_dict = linux_user_configuration_instance.to_dict()
# create an instance of LinuxUserConfiguration from a dict
linux_user_configuration_from_dict = LinuxUserConfiguration.from_dict(linux_user_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


