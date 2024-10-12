# SyncResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**events** | [**List[Event]**](Event.md) | List of events | 
**inaccessible_cids** | **List[str]** | List of CIDs that user can&#39;t access | [optional] 

## Example

```python
from openapi_client.models.sync_response import SyncResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SyncResponse from a JSON string
sync_response_instance = SyncResponse.from_json(json)
# print the JSON string representation of the object
print(SyncResponse.to_json())

# convert the object into a dict
sync_response_dict = sync_response_instance.to_dict()
# create an instance of SyncResponse from a dict
sync_response_from_dict = SyncResponse.from_dict(sync_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


