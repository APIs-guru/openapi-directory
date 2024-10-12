# CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin

The origin of the prefix

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interfaces** | **List[str]** | Interfaces associated with the prefix | [optional] 
**type** | **str** | Type of the origin | [optional] 

## Example

```python
from openapi_client.models.create_network_appliance_prefixes_delegated_static_request_origin import CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin from a JSON string
create_network_appliance_prefixes_delegated_static_request_origin_instance = CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin.to_json())

# convert the object into a dict
create_network_appliance_prefixes_delegated_static_request_origin_dict = create_network_appliance_prefixes_delegated_static_request_origin_instance.to_dict()
# create an instance of CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin from a dict
create_network_appliance_prefixes_delegated_static_request_origin_from_dict = CreateNetworkAppliancePrefixesDelegatedStaticRequestOrigin.from_dict(create_network_appliance_prefixes_delegated_static_request_origin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


