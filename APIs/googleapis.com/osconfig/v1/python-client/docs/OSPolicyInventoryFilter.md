# OSPolicyInventoryFilter

Filtering criteria to select VMs based on inventory details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_short_name** | **str** | Required. The OS short name | [optional] 
**os_version** | **str** | The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of &#x60;7&#x60;, specify the following value for this field &#x60;7.*&#x60; An empty string matches all OS versions. | [optional] 

## Example

```python
from openapi_client.models.os_policy_inventory_filter import OSPolicyInventoryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyInventoryFilter from a JSON string
os_policy_inventory_filter_instance = OSPolicyInventoryFilter.from_json(json)
# print the JSON string representation of the object
print(OSPolicyInventoryFilter.to_json())

# convert the object into a dict
os_policy_inventory_filter_dict = os_policy_inventory_filter_instance.to_dict()
# create an instance of OSPolicyInventoryFilter from a dict
os_policy_inventory_filter_from_dict = OSPolicyInventoryFilter.from_dict(os_policy_inventory_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


