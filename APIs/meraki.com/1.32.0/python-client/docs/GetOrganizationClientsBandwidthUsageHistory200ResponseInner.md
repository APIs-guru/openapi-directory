# GetOrganizationClientsBandwidthUsageHistory200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream** | **int** | Downloaded data, in mbps. | [optional] 
**total** | **int** | Total bandwidth usage, in mbps. | [optional] 
**ts** | **datetime** | Timestamp for the bandwidth usage snapshot. | [optional] 
**upstream** | **int** | Uploaded data, in mbps. | [optional] 

## Example

```python
from openapi_client.models.get_organization_clients_bandwidth_usage_history200_response_inner import GetOrganizationClientsBandwidthUsageHistory200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationClientsBandwidthUsageHistory200ResponseInner from a JSON string
get_organization_clients_bandwidth_usage_history200_response_inner_instance = GetOrganizationClientsBandwidthUsageHistory200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationClientsBandwidthUsageHistory200ResponseInner.to_json())

# convert the object into a dict
get_organization_clients_bandwidth_usage_history200_response_inner_dict = get_organization_clients_bandwidth_usage_history200_response_inner_instance.to_dict()
# create an instance of GetOrganizationClientsBandwidthUsageHistory200ResponseInner from a dict
get_organization_clients_bandwidth_usage_history200_response_inner_from_dict = GetOrganizationClientsBandwidthUsageHistory200ResponseInner.from_dict(get_organization_clients_bandwidth_usage_history200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


