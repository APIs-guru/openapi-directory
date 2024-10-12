# CheckPost200ResponseMatchesInnerRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**CheckPost200ResponseMatchesInnerRuleCategory**](CheckPost200ResponseMatchesInnerRuleCategory.md) |  | 
**description** | **str** |  | 
**id** | **str** | An rule&#39;s identifier that&#39;s unique for this language. | 
**issue_type** | **str** | The &lt;a href&#x3D;\&quot;http://www.w3.org/International/multilingualweb/lt/drafts/its20/its20.html#lqissue-typevalues\&quot;&gt;Localization Quality Issue Type&lt;/a&gt;. This is not defined for all languages, in which case it will always be &#39;Uncategorized&#39;. | [optional] 
**sub_id** | **str** | An optional sub identifier of the rule, used when several rules are grouped. | [optional] 
**urls** | [**List[CheckPost200ResponseMatchesInnerRuleUrlsInner]**](CheckPost200ResponseMatchesInnerRuleUrlsInner.md) | An optional array of URLs with a more detailed description of the error. | [optional] 

## Example

```python
from openapi_client.models.check_post200_response_matches_inner_rule import CheckPost200ResponseMatchesInnerRule

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPost200ResponseMatchesInnerRule from a JSON string
check_post200_response_matches_inner_rule_instance = CheckPost200ResponseMatchesInnerRule.from_json(json)
# print the JSON string representation of the object
print(CheckPost200ResponseMatchesInnerRule.to_json())

# convert the object into a dict
check_post200_response_matches_inner_rule_dict = check_post200_response_matches_inner_rule_instance.to_dict()
# create an instance of CheckPost200ResponseMatchesInnerRule from a dict
check_post200_response_matches_inner_rule_from_dict = CheckPost200ResponseMatchesInnerRule.from_dict(check_post200_response_matches_inner_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


