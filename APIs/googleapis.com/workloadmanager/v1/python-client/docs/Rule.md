# Rule

Message represent a rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | descrite rule in plain language | [optional] 
**display_name** | **str** | the name display in UI | [optional] 
**error_message** | **str** | the message template for rule | [optional] 
**name** | **str** | rule name | [optional] 
**primary_category** | **str** | the primary category | [optional] 
**remediation** | **str** | the remediation for the rule | [optional] 
**revision_id** | **str** | Output only. the version of the rule | [optional] [readonly] 
**secondary_category** | **str** | the secondary category | [optional] 
**severity** | **str** | the severity of the rule | [optional] 
**tags** | **List[str]** | List of user-defined tags | [optional] 
**uri** | **str** | the docuement url for the rule | [optional] 

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


