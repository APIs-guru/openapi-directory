# SecurityRule

Network security rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**SecurityRulePropertiesFormat**](SecurityRulePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.security_rule import SecurityRule

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityRule from a JSON string
security_rule_instance = SecurityRule.from_json(json)
# print the JSON string representation of the object
print(SecurityRule.to_json())

# convert the object into a dict
security_rule_dict = security_rule_instance.to_dict()
# create an instance of SecurityRule from a dict
security_rule_from_dict = SecurityRule.from_dict(security_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


