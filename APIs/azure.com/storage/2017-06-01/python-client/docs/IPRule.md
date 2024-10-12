# IPRule

IP rule with specific IP or IP range in CIDR format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action of IP ACL rule. | [optional] [default to 'Allow']
**value** | **str** | Specifies the IP or IP range in CIDR format. Only IPV4 address is allowed. | 

## Example

```python
from openapi_client.models.ip_rule import IPRule

# TODO update the JSON string below
json = "{}"
# create an instance of IPRule from a JSON string
ip_rule_instance = IPRule.from_json(json)
# print the JSON string representation of the object
print(IPRule.to_json())

# convert the object into a dict
ip_rule_dict = ip_rule_instance.to_dict()
# create an instance of IPRule from a dict
ip_rule_from_dict = IPRule.from_dict(ip_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


