# OSPolicyOSFilter

Filtering criteria to select VMs based on OS details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_short_name** | **str** | This should match OS short name emitted by the OS inventory agent. An empty value matches any OS. | [optional] 
**os_version** | **str** | This value should match the version emitted by the OS inventory agent. Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of &#x60;7&#x60;, specify the following value for this field &#x60;7.*&#x60; | [optional] 

## Example

```python
from openapi_client.models.os_policy_os_filter import OSPolicyOSFilter

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyOSFilter from a JSON string
os_policy_os_filter_instance = OSPolicyOSFilter.from_json(json)
# print the JSON string representation of the object
print(OSPolicyOSFilter.to_json())

# convert the object into a dict
os_policy_os_filter_dict = os_policy_os_filter_instance.to_dict()
# create an instance of OSPolicyOSFilter from a dict
os_policy_os_filter_from_dict = OSPolicyOSFilter.from_dict(os_policy_os_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


