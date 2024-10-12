# AddMediaIntent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | 
**media_destination** | [**MediaDestination**](MediaDestination.md) |  | [optional] 
**media_items** | [**List[MediaItem]**](MediaItem.md) |  | [optional] 
**media_search** | [**MediaSearch**](MediaSearch.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_media_intent import AddMediaIntent

# TODO update the JSON string below
json = "{}"
# create an instance of AddMediaIntent from a JSON string
add_media_intent_instance = AddMediaIntent.from_json(json)
# print the JSON string representation of the object
print(AddMediaIntent.to_json())

# convert the object into a dict
add_media_intent_dict = add_media_intent_instance.to_dict()
# create an instance of AddMediaIntent from a dict
add_media_intent_from_dict = AddMediaIntent.from_dict(add_media_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


