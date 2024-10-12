# WindowsConfiguration

Specifies Windows operating system settings on the virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_unattend_content** | [**List[AdditionalUnattendContent]**](AdditionalUnattendContent.md) | Specifies additional base-64 encoded XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. | [optional] 
**enable_automatic_updates** | **bool** | Indicates whether Automatic Updates is enabled for the Windows virtual machine. Default value is true. &lt;br&gt;&lt;br&gt; For virtual machine scale sets, this property can be updated and updates will take effect on OS reprovisioning. | [optional] 
**provision_vm_agent** | **bool** | Indicates whether virtual machine agent should be provisioned on the virtual machine. &lt;br&gt;&lt;br&gt; When this property is not specified in the request body, default behavior is to set it to true.  This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. | [optional] 
**time_zone** | **str** | Specifies the time zone of the virtual machine. e.g. \&quot;Pacific Standard Time\&quot;. &lt;br&gt;&lt;br&gt; Possible values can be [TimeZoneInfo.Id](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.id?#System_TimeZoneInfo_Id) value from time zones returned by [TimeZoneInfo.GetSystemTimeZones](https://docs.microsoft.com/en-us/dotnet/api/system.timezoneinfo.getsystemtimezones). | [optional] 
**win_rm** | [**WinRMConfiguration**](WinRMConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.windows_configuration import WindowsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsConfiguration from a JSON string
windows_configuration_instance = WindowsConfiguration.from_json(json)
# print the JSON string representation of the object
print(WindowsConfiguration.to_json())

# convert the object into a dict
windows_configuration_dict = windows_configuration_instance.to_dict()
# create an instance of WindowsConfiguration from a dict
windows_configuration_from_dict = WindowsConfiguration.from_dict(windows_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


