# UsageAggregatePage

Holds an array of usage aggregates and the continuation token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[UsageAggregate]**](UsageAggregate.md) | Array of usage aggregates. | [optional] 

## Example

```python
from openapi_client.models.usage_aggregate_page import UsageAggregatePage

# TODO update the JSON string below
json = "{}"
# create an instance of UsageAggregatePage from a JSON string
usage_aggregate_page_instance = UsageAggregatePage.from_json(json)
# print the JSON string representation of the object
print(UsageAggregatePage.to_json())

# convert the object into a dict
usage_aggregate_page_dict = usage_aggregate_page_instance.to_dict()
# create an instance of UsageAggregatePage from a dict
usage_aggregate_page_from_dict = UsageAggregatePage.from_dict(usage_aggregate_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


