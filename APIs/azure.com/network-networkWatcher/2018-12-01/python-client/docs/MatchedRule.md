# MatchedRule

Matched rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The network traffic is allowed or denied. Possible values are &#39;Allow&#39; and &#39;Deny&#39;. | [optional] 
**rule_name** | **str** | Name of the matched network security rule. | [optional] 

## Example

```python
from openapi_client.models.matched_rule import MatchedRule

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedRule from a JSON string
matched_rule_instance = MatchedRule.from_json(json)
# print the JSON string representation of the object
print(MatchedRule.to_json())

# convert the object into a dict
matched_rule_dict = matched_rule_instance.to_dict()
# create an instance of MatchedRule from a dict
matched_rule_from_dict = MatchedRule.from_dict(matched_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


