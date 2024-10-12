# LogSearchRuleResourceCollection

Represents a collection of Log Search rule resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[LogSearchRuleResource]**](LogSearchRuleResource.md) | The values for the Log Search Rule resources. | [optional] 

## Example

```python
from openapi_client.models.log_search_rule_resource_collection import LogSearchRuleResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of LogSearchRuleResourceCollection from a JSON string
log_search_rule_resource_collection_instance = LogSearchRuleResourceCollection.from_json(json)
# print the JSON string representation of the object
print(LogSearchRuleResourceCollection.to_json())

# convert the object into a dict
log_search_rule_resource_collection_dict = log_search_rule_resource_collection_instance.to_dict()
# create an instance of LogSearchRuleResourceCollection from a dict
log_search_rule_resource_collection_from_dict = LogSearchRuleResourceCollection.from_dict(log_search_rule_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


