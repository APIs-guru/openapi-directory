# MarkChannelsReadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.mark_channels_read_request import MarkChannelsReadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MarkChannelsReadRequest from a JSON string
mark_channels_read_request_instance = MarkChannelsReadRequest.from_json(json)
# print the JSON string representation of the object
print(MarkChannelsReadRequest.to_json())

# convert the object into a dict
mark_channels_read_request_dict = mark_channels_read_request_instance.to_dict()
# create an instance of MarkChannelsReadRequest from a dict
mark_channels_read_request_from_dict = MarkChannelsReadRequest.from_dict(mark_channels_read_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


