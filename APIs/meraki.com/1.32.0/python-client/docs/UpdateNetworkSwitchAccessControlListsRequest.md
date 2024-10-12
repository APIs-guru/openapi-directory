# UpdateNetworkSwitchAccessControlListsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateNetworkSwitchAccessControlListsRequestRulesInner]**](UpdateNetworkSwitchAccessControlListsRequestRulesInner.md) | An ordered array of the access control list rules (not including the default rule). An empty array will clear the rules. | 

## Example

```python
from openapi_client.models.update_network_switch_access_control_lists_request import UpdateNetworkSwitchAccessControlListsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchAccessControlListsRequest from a JSON string
update_network_switch_access_control_lists_request_instance = UpdateNetworkSwitchAccessControlListsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchAccessControlListsRequest.to_json())

# convert the object into a dict
update_network_switch_access_control_lists_request_dict = update_network_switch_access_control_lists_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchAccessControlListsRequest from a dict
update_network_switch_access_control_lists_request_from_dict = UpdateNetworkSwitchAccessControlListsRequest.from_dict(update_network_switch_access_control_lists_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


