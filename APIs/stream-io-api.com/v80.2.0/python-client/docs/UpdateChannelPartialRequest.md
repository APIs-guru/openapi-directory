# UpdateChannelPartialRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**set** | **Dict[str, object]** |  | 
**unset** | **List[str]** |  | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_channel_partial_request import UpdateChannelPartialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChannelPartialRequest from a JSON string
update_channel_partial_request_instance = UpdateChannelPartialRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChannelPartialRequest.to_json())

# convert the object into a dict
update_channel_partial_request_dict = update_channel_partial_request_instance.to_dict()
# create an instance of UpdateChannelPartialRequest from a dict
update_channel_partial_request_from_dict = UpdateChannelPartialRequest.from_dict(update_channel_partial_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


