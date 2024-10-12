# ExportStatuses

The list of export statuses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of service elements. | [optional] 
**value** | [**List[ExportStatus]**](ExportStatus.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.export_statuses import ExportStatuses

# TODO update the JSON string below
json = "{}"
# create an instance of ExportStatuses from a JSON string
export_statuses_instance = ExportStatuses.from_json(json)
# print the JSON string representation of the object
print(ExportStatuses.to_json())

# convert the object into a dict
export_statuses_dict = export_statuses_instance.to_dict()
# create an instance of ExportStatuses from a dict
export_statuses_from_dict = ExportStatuses.from_dict(export_statuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


