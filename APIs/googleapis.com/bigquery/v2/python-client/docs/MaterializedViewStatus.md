# MaterializedViewStatus

Status of a materialized view. The last refresh timestamp status is omitted here, but is present in the MaterializedViewDefinition message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_refresh_status** | [**ErrorProto**](ErrorProto.md) |  | [optional] 
**refresh_watermark** | **str** | Output only. Refresh watermark of materialized view. The base tables&#39; data were collected into the materialized view cache until this time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.materialized_view_status import MaterializedViewStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MaterializedViewStatus from a JSON string
materialized_view_status_instance = MaterializedViewStatus.from_json(json)
# print the JSON string representation of the object
print(MaterializedViewStatus.to_json())

# convert the object into a dict
materialized_view_status_dict = materialized_view_status_instance.to_dict()
# create an instance of MaterializedViewStatus from a dict
materialized_view_status_from_dict = MaterializedViewStatus.from_dict(materialized_view_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


