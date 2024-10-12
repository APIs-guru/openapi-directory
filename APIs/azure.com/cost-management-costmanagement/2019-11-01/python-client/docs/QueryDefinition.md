# QueryDefinition

The definition of a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | [**QueryDataset**](QueryDataset.md) |  | [optional] 
**time_period** | [**QueryTimePeriod**](QueryTimePeriod.md) |  | [optional] 
**timeframe** | **str** | The time frame for pulling data for the query. If custom, then a specific time period must be provided. | 
**type** | **str** | The type of the query. | 

## Example

```python
from openapi_client.models.query_definition import QueryDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDefinition from a JSON string
query_definition_instance = QueryDefinition.from_json(json)
# print the JSON string representation of the object
print(QueryDefinition.to_json())

# convert the object into a dict
query_definition_dict = query_definition_instance.to_dict()
# create an instance of QueryDefinition from a dict
query_definition_from_dict = QueryDefinition.from_dict(query_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


