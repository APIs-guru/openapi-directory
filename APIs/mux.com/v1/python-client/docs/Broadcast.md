# Broadcast


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background** | **str** | URL of an image to display as the background of the broadcast. Its dimensions should match the provided resolution. | [optional] 
**id** | **str** | Unique identifier for the broadcast. Max 255 characters. | 
**layout** | [**BroadcastLayout**](BroadcastLayout.md) |  | [default to BroadcastLayout.GALLERY]
**live_stream_id** | **str** | The ID of the live stream that the broadcast will be sent to. | 
**passthrough** | **str** | Arbitrary user-supplied metadata that will be included in the broadcast details and related webhooks. Max: 255 characters. | [optional] 
**resolution** | [**BroadcastResolution**](BroadcastResolution.md) |  | [default to BroadcastResolution.ENUM_1920X1080]
**status** | [**BroadcastStatus**](BroadcastStatus.md) |  | 

## Example

```python
from openapi_client.models.broadcast import Broadcast

# TODO update the JSON string below
json = "{}"
# create an instance of Broadcast from a JSON string
broadcast_instance = Broadcast.from_json(json)
# print the JSON string representation of the object
print(Broadcast.to_json())

# convert the object into a dict
broadcast_dict = broadcast_instance.to_dict()
# create an instance of Broadcast from a dict
broadcast_from_dict = Broadcast.from_dict(broadcast_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


