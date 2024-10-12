# Rule

Describes remote addresses that is recommended to communicate with the Azure resource on some (Protocol, Port, Direction). All other remote addresses are recommended to be blocked

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_port** | **int** |  | [optional] 
**direction** | **str** | The rule&#39;s direction | [optional] 
**ip_addresses** | **List[str]** | The remote IP addresses that should be able to communicate with the Azure resource on the rule&#39;s destination port and protocol | [optional] 
**name** | **str** | The name of the rule | [optional] 
**protocols** | **List[str]** | The rule&#39;s transport protocols | [optional] 

## Example

```python
from openapi_client.models.rule import Rule

# TODO update the JSON string below
json = "{}"
# create an instance of Rule from a JSON string
rule_instance = Rule.from_json(json)
# print the JSON string representation of the object
print(Rule.to_json())

# convert the object into a dict
rule_dict = rule_instance.to_dict()
# create an instance of Rule from a dict
rule_from_dict = Rule.from_dict(rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


