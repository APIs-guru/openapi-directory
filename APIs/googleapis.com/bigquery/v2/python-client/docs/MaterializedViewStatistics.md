# MaterializedViewStatistics

Statistics of materialized views considered in a query job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**materialized_view** | [**List[MaterializedView]**](MaterializedView.md) | Materialized views considered for the query job. Only certain materialized views are used. For a detailed list, see the child message. If many materialized views are considered, then the list might be incomplete. | [optional] 

## Example

```python
from openapi_client.models.materialized_view_statistics import MaterializedViewStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of MaterializedViewStatistics from a JSON string
materialized_view_statistics_instance = MaterializedViewStatistics.from_json(json)
# print the JSON string representation of the object
print(MaterializedViewStatistics.to_json())

# convert the object into a dict
materialized_view_statistics_dict = materialized_view_statistics_instance.to_dict()
# create an instance of MaterializedViewStatistics from a dict
materialized_view_statistics_from_dict = MaterializedViewStatistics.from_dict(materialized_view_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


