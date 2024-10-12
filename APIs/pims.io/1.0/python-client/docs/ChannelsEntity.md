# ChannelsEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique ID of the channel. | 
**ignored** | **bool** | Defines whether this channel is ignored or not. | 
**label** | **str** | Full label of the channel. | 
**last_update_timestamp** | **int** | Timestamp for when the channel was last updated in the customer&#39;s database. | 
**short_label** | **str** | Short label of the channel (generally less than 5 characters). | 

## Example

```python
from openapi_client.models.channels_entity import ChannelsEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ChannelsEntity from a JSON string
channels_entity_instance = ChannelsEntity.from_json(json)
# print the JSON string representation of the object
print(ChannelsEntity.to_json())

# convert the object into a dict
channels_entity_dict = channels_entity_instance.to_dict()
# create an instance of ChannelsEntity from a dict
channels_entity_from_dict = ChannelsEntity.from_dict(channels_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


