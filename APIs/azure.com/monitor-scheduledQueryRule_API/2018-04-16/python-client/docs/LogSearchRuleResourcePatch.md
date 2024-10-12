# LogSearchRuleResourcePatch

The log search rule resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogSearchRulePatch**](LogSearchRulePatch.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.log_search_rule_resource_patch import LogSearchRuleResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of LogSearchRuleResourcePatch from a JSON string
log_search_rule_resource_patch_instance = LogSearchRuleResourcePatch.from_json(json)
# print the JSON string representation of the object
print(LogSearchRuleResourcePatch.to_json())

# convert the object into a dict
log_search_rule_resource_patch_dict = log_search_rule_resource_patch_instance.to_dict()
# create an instance of LogSearchRuleResourcePatch from a dict
log_search_rule_resource_patch_from_dict = LogSearchRuleResourcePatch.from_dict(log_search_rule_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


