# Cursor

A position in a query result set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**before** | **bool** | If the position is just before or just after the given values, relative to the sort order defined by the query. | [optional] 
**values** | [**List[Value]**](Value.md) | The values that represent a position, in the order they appear in the order by clause of a query. Can contain fewer values than specified in the order by clause. | [optional] 

## Example

```python
from openapi_client.models.cursor import Cursor

# TODO update the JSON string below
json = "{}"
# create an instance of Cursor from a JSON string
cursor_instance = Cursor.from_json(json)
# print the JSON string representation of the object
print(Cursor.to_json())

# convert the object into a dict
cursor_dict = cursor_instance.to_dict()
# create an instance of Cursor from a dict
cursor_from_dict = Cursor.from_dict(cursor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


