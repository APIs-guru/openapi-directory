# DmEventReferencedTweetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.dm_event_referenced_tweets_inner import DmEventReferencedTweetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DmEventReferencedTweetsInner from a JSON string
dm_event_referenced_tweets_inner_instance = DmEventReferencedTweetsInner.from_json(json)
# print the JSON string representation of the object
print(DmEventReferencedTweetsInner.to_json())

# convert the object into a dict
dm_event_referenced_tweets_inner_dict = dm_event_referenced_tweets_inner_instance.to_dict()
# create an instance of DmEventReferencedTweetsInner from a dict
dm_event_referenced_tweets_inner_from_dict = DmEventReferencedTweetsInner.from_dict(dm_event_referenced_tweets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


