# PagespeedApiPagespeedResponseV4RuleGroupsValue

The name of this rule group: one of \"SPEED\", \"USABILITY\", or \"SECURITY\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_pass** | **bool** |  | [optional] 
**score** | **int** | The score (0-100) for this rule group, which indicates how much better a page could be in that category (e.g. how much faster, or how much more usable, or how much more secure). A high score indicates little room for improvement, while a lower score indicates more room for improvement. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v4_rule_groups_value import PagespeedApiPagespeedResponseV4RuleGroupsValue

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV4RuleGroupsValue from a JSON string
pagespeed_api_pagespeed_response_v4_rule_groups_value_instance = PagespeedApiPagespeedResponseV4RuleGroupsValue.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV4RuleGroupsValue.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v4_rule_groups_value_dict = pagespeed_api_pagespeed_response_v4_rule_groups_value_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV4RuleGroupsValue from a dict
pagespeed_api_pagespeed_response_v4_rule_groups_value_from_dict = PagespeedApiPagespeedResponseV4RuleGroupsValue.from_dict(pagespeed_api_pagespeed_response_v4_rule_groups_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


