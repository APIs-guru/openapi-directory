# UpdateMediaAffinityIntent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_type** | [**MediaAffinityType**](MediaAffinityType.md) |  | [optional] 
**var_class** | **str** |  | 
**media_items** | [**List[MediaItem]**](MediaItem.md) |  | [optional] 
**media_search** | [**MediaSearch**](MediaSearch.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_media_affinity_intent import UpdateMediaAffinityIntent

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMediaAffinityIntent from a JSON string
update_media_affinity_intent_instance = UpdateMediaAffinityIntent.from_json(json)
# print the JSON string representation of the object
print(UpdateMediaAffinityIntent.to_json())

# convert the object into a dict
update_media_affinity_intent_dict = update_media_affinity_intent_instance.to_dict()
# create an instance of UpdateMediaAffinityIntent from a dict
update_media_affinity_intent_from_dict = UpdateMediaAffinityIntent.from_dict(update_media_affinity_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


