# Columns

Lists columns (dimensions and metrics) for a particular report type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_names** | **List[str]** | List of attributes names returned by columns. | [optional] 
**etag** | **str** | Etag of collection. This etag can be compared with the last response etag to check if response has changed. | [optional] 
**items** | [**List[Column]**](Column.md) | List of columns for a report type. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#columns']
**total_results** | **int** | Total number of columns returned in the response. | [optional] 

## Example

```python
from openapi_client.models.columns import Columns

# TODO update the JSON string below
json = "{}"
# create an instance of Columns from a JSON string
columns_instance = Columns.from_json(json)
# print the JSON string representation of the object
print(Columns.to_json())

# convert the object into a dict
columns_dict = columns_instance.to_dict()
# create an instance of Columns from a dict
columns_from_dict = Columns.from_dict(columns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


