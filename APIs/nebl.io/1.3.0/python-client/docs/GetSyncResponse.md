# GetSyncResponse

Object containing node sync status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_chain_height** | **float** | Current blockchain height | [optional] 
**error** | **str** | Recent sync error messages | [optional] 
**height** | **float** | Height node is synced to | [optional] 
**status** | **str** | Current sync status | [optional] 
**sync_percentage** | **float** | Current sync percentage | [optional] 
**type** | **str** | Node type | [optional] 

## Example

```python
from openapi_client.models.get_sync_response import GetSyncResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetSyncResponse from a JSON string
get_sync_response_instance = GetSyncResponse.from_json(json)
# print the JSON string representation of the object
print(GetSyncResponse.to_json())

# convert the object into a dict
get_sync_response_dict = get_sync_response_instance.to_dict()
# create an instance of GetSyncResponse from a dict
get_sync_response_from_dict = GetSyncResponse.from_dict(get_sync_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


