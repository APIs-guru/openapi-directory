# DeleteChannelsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**result** | [**Dict[str, DeleteChannelsResult]**](DeleteChannelsResult.md) |  | [optional] 
**task_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.delete_channels_response import DeleteChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteChannelsResponse from a JSON string
delete_channels_response_instance = DeleteChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteChannelsResponse.to_json())

# convert the object into a dict
delete_channels_response_dict = delete_channels_response_instance.to_dict()
# create an instance of DeleteChannelsResponse from a dict
delete_channels_response_from_dict = DeleteChannelsResponse.from_dict(delete_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


