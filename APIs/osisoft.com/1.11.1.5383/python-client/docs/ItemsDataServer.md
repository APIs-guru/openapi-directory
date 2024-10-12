# ItemsDataServer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[DataServer]**](DataServer.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_data_server import ItemsDataServer

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsDataServer from a JSON string
items_data_server_instance = ItemsDataServer.from_json(json)
# print the JSON string representation of the object
print(ItemsDataServer.to_json())

# convert the object into a dict
items_data_server_dict = items_data_server_instance.to_dict()
# create an instance of ItemsDataServer from a dict
items_data_server_from_dict = ItemsDataServer.from_dict(items_data_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


