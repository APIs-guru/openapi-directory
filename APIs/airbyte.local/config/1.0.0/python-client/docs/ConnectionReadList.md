# ConnectionReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connections** | [**List[ConnectionRead]**](ConnectionRead.md) |  | 

## Example

```python
from openapi_client.models.connection_read_list import ConnectionReadList

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionReadList from a JSON string
connection_read_list_instance = ConnectionReadList.from_json(json)
# print the JSON string representation of the object
print(ConnectionReadList.to_json())

# convert the object into a dict
connection_read_list_dict = connection_read_list_instance.to_dict()
# create an instance of ConnectionReadList from a dict
connection_read_list_from_dict = ConnectionReadList.from_dict(connection_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


