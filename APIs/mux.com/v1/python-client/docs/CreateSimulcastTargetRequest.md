# CreateSimulcastTargetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passthrough** | **str** | Arbitrary user-supplied metadata set by you when creating a simulcast target. | [optional] 
**stream_key** | **str** | Stream Key represents a stream identifier on the third party live streaming service to send the parent live stream to. | [optional] 
**url** | **str** | RTMP hostname including application name for the third party live streaming service. Example: &#x60;rtmp://live.example.com/app&#x60;. | 

## Example

```python
from openapi_client.models.create_simulcast_target_request import CreateSimulcastTargetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSimulcastTargetRequest from a JSON string
create_simulcast_target_request_instance = CreateSimulcastTargetRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSimulcastTargetRequest.to_json())

# convert the object into a dict
create_simulcast_target_request_dict = create_simulcast_target_request_instance.to_dict()
# create an instance of CreateSimulcastTargetRequest from a dict
create_simulcast_target_request_from_dict = CreateSimulcastTargetRequest.from_dict(create_simulcast_target_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


