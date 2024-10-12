# CreateNetworkAppliancePrefixesDelegatedStaticRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A name or description for the prefix | [optional] 
**origin** | [**CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin**](CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin.md) |  | 
**prefix** | **str** | A static IPv6 prefix | 

## Example

```python
from openapi_client.models.create_network_appliance_prefixes_delegated_static_request import CreateNetworkAppliancePrefixesDelegatedStaticRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkAppliancePrefixesDelegatedStaticRequest from a JSON string
create_network_appliance_prefixes_delegated_static_request_instance = CreateNetworkAppliancePrefixesDelegatedStaticRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkAppliancePrefixesDelegatedStaticRequest.to_json())

# convert the object into a dict
create_network_appliance_prefixes_delegated_static_request_dict = create_network_appliance_prefixes_delegated_static_request_instance.to_dict()
# create an instance of CreateNetworkAppliancePrefixesDelegatedStaticRequest from a dict
create_network_appliance_prefixes_delegated_static_request_from_dict = CreateNetworkAppliancePrefixesDelegatedStaticRequest.from_dict(create_network_appliance_prefixes_delegated_static_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


