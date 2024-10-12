# SyncRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_cids** | **List[str]** | List of channel CIDs to sync | [optional] 
**client_id** | **str** |  | [optional] 
**connection_id** | **str** |  | [optional] 
**last_sync_at** | **datetime** | Date from which synchronization should happen | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**watch** | **bool** | If set to true this will start watching requested and newly added channels that user has access to. If error occurred with this option enabled and it is not an input error - channels will still be watched. | [optional] 
**with_inaccessible_cids** | **bool** | If set to true this will add &#39;inaccessible_cids&#39; to response type | [optional] 

## Example

```python
from openapi_client.models.sync_request import SyncRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SyncRequest from a JSON string
sync_request_instance = SyncRequest.from_json(json)
# print the JSON string representation of the object
print(SyncRequest.to_json())

# convert the object into a dict
sync_request_dict = sync_request_instance.to_dict()
# create an instance of SyncRequest from a dict
sync_request_from_dict = SyncRequest.from_dict(sync_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


