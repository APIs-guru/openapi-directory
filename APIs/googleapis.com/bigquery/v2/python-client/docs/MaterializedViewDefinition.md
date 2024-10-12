# MaterializedViewDefinition

Definition and configuration of a materialized view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_non_incremental_definition** | **bool** | Optional. This option declares authors intention to construct a materialized view that will not be refreshed incrementally. | [optional] 
**enable_refresh** | **bool** | Optional. Enable automatic refresh of the materialized view when the base table is updated. The default value is \&quot;true\&quot;. | [optional] 
**last_refresh_time** | **str** | Output only. The time when this materialized view was last refreshed, in milliseconds since the epoch. | [optional] [readonly] 
**max_staleness** | **bytearray** | [Optional] Max staleness of data that could be returned when materizlized view is queried (formatted as Google SQL Interval type). | [optional] 
**query** | **str** | Required. A query whose results are persisted. | [optional] 
**refresh_interval_ms** | **str** | Optional. The maximum frequency at which this materialized view will be refreshed. The default value is \&quot;1800000\&quot; (30 minutes). | [optional] 

## Example

```python
from openapi_client.models.materialized_view_definition import MaterializedViewDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of MaterializedViewDefinition from a JSON string
materialized_view_definition_instance = MaterializedViewDefinition.from_json(json)
# print the JSON string representation of the object
print(MaterializedViewDefinition.to_json())

# convert the object into a dict
materialized_view_definition_dict = materialized_view_definition_instance.to_dict()
# create an instance of MaterializedViewDefinition from a dict
materialized_view_definition_from_dict = MaterializedViewDefinition.from_dict(materialized_view_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


