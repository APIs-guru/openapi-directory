# ColumnHeader

Column headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **List[str]** | The dimension names in the response. | [optional] 
**metric_header** | [**MetricHeader**](MetricHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.column_header import ColumnHeader

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnHeader from a JSON string
column_header_instance = ColumnHeader.from_json(json)
# print the JSON string representation of the object
print(ColumnHeader.to_json())

# convert the object into a dict
column_header_dict = column_header_instance.to_dict()
# create an instance of ColumnHeader from a dict
column_header_from_dict = ColumnHeader.from_dict(column_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


