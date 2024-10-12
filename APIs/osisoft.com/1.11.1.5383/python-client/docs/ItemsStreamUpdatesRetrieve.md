# ItemsStreamUpdatesRetrieve


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[StreamUpdatesRetrieve]**](StreamUpdatesRetrieve.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_stream_updates_retrieve import ItemsStreamUpdatesRetrieve

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsStreamUpdatesRetrieve from a JSON string
items_stream_updates_retrieve_instance = ItemsStreamUpdatesRetrieve.from_json(json)
# print the JSON string representation of the object
print(ItemsStreamUpdatesRetrieve.to_json())

# convert the object into a dict
items_stream_updates_retrieve_dict = items_stream_updates_retrieve_instance.to_dict()
# create an instance of ItemsStreamUpdatesRetrieve from a dict
items_stream_updates_retrieve_from_dict = ItemsStreamUpdatesRetrieve.from_dict(items_stream_updates_retrieve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


