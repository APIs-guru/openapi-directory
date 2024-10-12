# IpFilterRule

Single item in a List or Get IpFilterRules operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Properties supplied to create or update IpFilterRules | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.ip_filter_rule import IpFilterRule

# TODO update the JSON string below
json = "{}"
# create an instance of IpFilterRule from a JSON string
ip_filter_rule_instance = IpFilterRule.from_json(json)
# print the JSON string representation of the object
print(IpFilterRule.to_json())

# convert the object into a dict
ip_filter_rule_dict = ip_filter_rule_instance.to_dict()
# create an instance of IpFilterRule from a dict
ip_filter_rule_from_dict = IpFilterRule.from_dict(ip_filter_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


