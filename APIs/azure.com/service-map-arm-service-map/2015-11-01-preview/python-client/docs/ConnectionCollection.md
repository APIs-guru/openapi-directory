# ConnectionCollection

Collection of Connection resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[Connection]**](Connection.md) | Collection of Connection resources. | [optional] 

## Example

```python
from openapi_client.models.connection_collection import ConnectionCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionCollection from a JSON string
connection_collection_instance = ConnectionCollection.from_json(json)
# print the JSON string representation of the object
print(ConnectionCollection.to_json())

# convert the object into a dict
connection_collection_dict = connection_collection_instance.to_dict()
# create an instance of ConnectionCollection from a dict
connection_collection_from_dict = ConnectionCollection.from_dict(connection_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


