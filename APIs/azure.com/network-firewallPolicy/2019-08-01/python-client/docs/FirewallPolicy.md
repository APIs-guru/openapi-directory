# FirewallPolicy

FirewallPolicy Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**FirewallPolicyPropertiesFormat**](FirewallPolicyPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.firewall_policy import FirewallPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicy from a JSON string
firewall_policy_instance = FirewallPolicy.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicy.to_json())

# convert the object into a dict
firewall_policy_dict = firewall_policy_instance.to_dict()
# create an instance of FirewallPolicy from a dict
firewall_policy_from_dict = FirewallPolicy.from_dict(firewall_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


