# LinuxConfiguration

Specifies the Linux operating system settings on the virtual machine. <br><br>For a list of supported Linux distributions, see [Linux on Azure-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-endorsed-distros?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json) <br><br> For running non-endorsed distributions, see [Information for Non-Endorsed Distributions](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-linux-create-upload-generic?toc=%2fazure%2fvirtual-machines%2flinux%2ftoc.json).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_password_authentication** | **bool** | Specifies whether password authentication should be disabled. | [optional] 
**ssh** | [**SshConfiguration**](SshConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.linux_configuration import LinuxConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of LinuxConfiguration from a JSON string
linux_configuration_instance = LinuxConfiguration.from_json(json)
# print the JSON string representation of the object
print(LinuxConfiguration.to_json())

# convert the object into a dict
linux_configuration_dict = linux_configuration_instance.to_dict()
# create an instance of LinuxConfiguration from a dict
linux_configuration_from_dict = LinuxConfiguration.from_dict(linux_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


