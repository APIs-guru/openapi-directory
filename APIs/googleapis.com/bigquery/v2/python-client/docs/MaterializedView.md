# MaterializedView

A materialized view considered for a query job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chosen** | **bool** | Whether the materialized view is chosen for the query. A materialized view can be chosen to rewrite multiple parts of the same query. If a materialized view is chosen to rewrite any part of the query, then this field is true, even if the materialized view was not chosen to rewrite others parts. | [optional] 
**estimated_bytes_saved** | **str** | If present, specifies a best-effort estimation of the bytes saved by using the materialized view rather than its base tables. | [optional] 
**rejected_reason** | **str** | If present, specifies the reason why the materialized view was not chosen for the query. | [optional] 
**table_reference** | [**TableReference**](TableReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.materialized_view import MaterializedView

# TODO update the JSON string below
json = "{}"
# create an instance of MaterializedView from a JSON string
materialized_view_instance = MaterializedView.from_json(json)
# print the JSON string representation of the object
print(MaterializedView.to_json())

# convert the object into a dict
materialized_view_dict = materialized_view_instance.to_dict()
# create an instance of MaterializedView from a dict
materialized_view_from_dict = MaterializedView.from_dict(materialized_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


