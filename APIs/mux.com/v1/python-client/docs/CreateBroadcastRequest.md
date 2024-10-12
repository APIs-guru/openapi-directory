# CreateBroadcastRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background** | **str** | URL of an image to display as the background of the broadcast. Its dimensions should match the provided resolution. | [optional] 
**layout** | [**BroadcastLayout**](BroadcastLayout.md) |  | [optional] [default to BroadcastLayout.GALLERY]
**live_stream_id** | **str** | The ID of the live stream that you want to broadcast to. | 
**passthrough** | **str** | Arbitrary user-supplied metadata that will be included in the broadcast details and related webhooks. Max: 255 characters. | [optional] 
**resolution** | [**BroadcastResolution**](BroadcastResolution.md) |  | [optional] [default to BroadcastResolution.ENUM_1920X1080]

## Example

```python
from openapi_client.models.create_broadcast_request import CreateBroadcastRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBroadcastRequest from a JSON string
create_broadcast_request_instance = CreateBroadcastRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBroadcastRequest.to_json())

# convert the object into a dict
create_broadcast_request_dict = create_broadcast_request_instance.to_dict()
# create an instance of CreateBroadcastRequest from a dict
create_broadcast_request_from_dict = CreateBroadcastRequest.from_dict(create_broadcast_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


