# ItemsStreamSummaries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[StreamSummaries]**](StreamSummaries.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_stream_summaries import ItemsStreamSummaries

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsStreamSummaries from a JSON string
items_stream_summaries_instance = ItemsStreamSummaries.from_json(json)
# print the JSON string representation of the object
print(ItemsStreamSummaries.to_json())

# convert the object into a dict
items_stream_summaries_dict = items_stream_summaries_instance.to_dict()
# create an instance of ItemsStreamSummaries from a dict
items_stream_summaries_from_dict = ItemsStreamSummaries.from_dict(items_stream_summaries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


