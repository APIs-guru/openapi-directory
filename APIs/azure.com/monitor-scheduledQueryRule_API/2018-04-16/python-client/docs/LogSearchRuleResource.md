# LogSearchRuleResource

The Log Search Rule resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogSearchRule**](LogSearchRule.md) |  | 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_search_rule_resource import LogSearchRuleResource

# TODO update the JSON string below
json = "{}"
# create an instance of LogSearchRuleResource from a JSON string
log_search_rule_resource_instance = LogSearchRuleResource.from_json(json)
# print the JSON string representation of the object
print(LogSearchRuleResource.to_json())

# convert the object into a dict
log_search_rule_resource_dict = log_search_rule_resource_instance.to_dict()
# create an instance of LogSearchRuleResource from a dict
log_search_rule_resource_from_dict = LogSearchRuleResource.from_dict(log_search_rule_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


