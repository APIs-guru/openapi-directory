# Row

A single row in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Time when the row was created. | [optional] 
**name** | **str** | The resource name of the row. Row names have the form &#x60;tables/{table}/rows/{row}&#x60;. The name is ignored when creating a row. | [optional] 
**update_time** | **str** | Time when the row was last updated. | [optional] 
**values** | **Dict[str, object]** | The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request. | [optional] 

## Example

```python
from openapi_client.models.row import Row

# TODO update the JSON string below
json = "{}"
# create an instance of Row from a JSON string
row_instance = Row.from_json(json)
# print the JSON string representation of the object
print(Row.to_json())

# convert the object into a dict
row_dict = row_instance.to_dict()
# create an instance of Row from a dict
row_from_dict = Row.from_dict(row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


