# StreamingLocatorCollection

A collection of StreamingLocator items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[StreamingLocator]**](StreamingLocator.md) | A collection of StreamingLocator items. | [optional] 

## Example

```python
from openapi_client.models.streaming_locator_collection import StreamingLocatorCollection

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingLocatorCollection from a JSON string
streaming_locator_collection_instance = StreamingLocatorCollection.from_json(json)
# print the JSON string representation of the object
print(StreamingLocatorCollection.to_json())

# convert the object into a dict
streaming_locator_collection_dict = streaming_locator_collection_instance.to_dict()
# create an instance of StreamingLocatorCollection from a dict
streaming_locator_collection_from_dict = StreamingLocatorCollection.from_dict(streaming_locator_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


