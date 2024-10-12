# LogSearchRulePatch

Log Search Rule Definition for Patching

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **str** | The flag which indicates whether the Log Search rule is enabled. Value should be true or false | [optional] 

## Example

```python
from openapi_client.models.log_search_rule_patch import LogSearchRulePatch

# TODO update the JSON string below
json = "{}"
# create an instance of LogSearchRulePatch from a JSON string
log_search_rule_patch_instance = LogSearchRulePatch.from_json(json)
# print the JSON string representation of the object
print(LogSearchRulePatch.to_json())

# convert the object into a dict
log_search_rule_patch_dict = log_search_rule_patch_instance.to_dict()
# create an instance of LogSearchRulePatch from a dict
log_search_rule_patch_from_dict = LogSearchRulePatch.from_dict(log_search_rule_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


