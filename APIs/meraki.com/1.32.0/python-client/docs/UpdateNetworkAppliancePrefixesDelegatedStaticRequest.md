# UpdateNetworkAppliancePrefixesDelegatedStaticRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A name or description for the prefix | [optional] 
**origin** | [**CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin**](CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin.md) |  | [optional] 
**prefix** | **str** | A static IPv6 prefix | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_prefixes_delegated_static_request import UpdateNetworkAppliancePrefixesDelegatedStaticRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkAppliancePrefixesDelegatedStaticRequest from a JSON string
update_network_appliance_prefixes_delegated_static_request_instance = UpdateNetworkAppliancePrefixesDelegatedStaticRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkAppliancePrefixesDelegatedStaticRequest.to_json())

# convert the object into a dict
update_network_appliance_prefixes_delegated_static_request_dict = update_network_appliance_prefixes_delegated_static_request_instance.to_dict()
# create an instance of UpdateNetworkAppliancePrefixesDelegatedStaticRequest from a dict
update_network_appliance_prefixes_delegated_static_request_from_dict = UpdateNetworkAppliancePrefixesDelegatedStaticRequest.from_dict(update_network_appliance_prefixes_delegated_static_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


