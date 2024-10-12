# IgnoreRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disregard_if_fixable** | **bool** | Only ignore the issue if no upgrade or patch is available. | 
**expires** | **str** | The timestamp that the issue will no longer be ignored. | [optional] 
**ignore_path** | **str** | The path to ignore (default is &#x60;*&#x60; which represents all paths). | [optional] 
**reason** | **str** | The reason that the issue was ignored. | [optional] 
**reason_type** | **str** | The classification of the ignore. | 

## Example

```python
from openapi_client.models.ignore_rule import IgnoreRule

# TODO update the JSON string below
json = "{}"
# create an instance of IgnoreRule from a JSON string
ignore_rule_instance = IgnoreRule.from_json(json)
# print the JSON string representation of the object
print(IgnoreRule.to_json())

# convert the object into a dict
ignore_rule_dict = ignore_rule_instance.to_dict()
# create an instance of IgnoreRule from a dict
ignore_rule_from_dict = IgnoreRule.from_dict(ignore_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


