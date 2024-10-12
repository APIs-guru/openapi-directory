# DeleteChannelsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cids** | **List[str]** | All channels that should be deleted | [optional] 
**hard_delete** | **bool** | Specify if channels and all ressources should be hard deleted | [optional] 

## Example

```python
from openapi_client.models.delete_channels_request import DeleteChannelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteChannelsRequest from a JSON string
delete_channels_request_instance = DeleteChannelsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteChannelsRequest.to_json())

# convert the object into a dict
delete_channels_request_dict = delete_channels_request_instance.to_dict()
# create an instance of DeleteChannelsRequest from a dict
delete_channels_request_from_dict = DeleteChannelsRequest.from_dict(delete_channels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


