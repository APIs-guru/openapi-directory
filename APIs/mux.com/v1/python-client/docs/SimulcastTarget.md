# SimulcastTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the Simulcast Target | [optional] 
**passthrough** | **str** | Arbitrary user-supplied metadata set when creating a simulcast target. | [optional] 
**status** | **str** | The current status of the simulcast target. See Statuses below for detailed description.   * &#x60;idle&#x60;: Default status. When the parent live stream is in disconnected status, simulcast targets will be idle state.   * &#x60;starting&#x60;: The simulcast target transitions into this state when the parent live stream transition into connected state.   * &#x60;broadcasting&#x60;: The simulcast target has successfully connected to the third party live streaming service and is pushing video to that service.   * &#x60;errored&#x60;: The simulcast target encountered an error either while attempting to connect to the third party live streaming service, or mid-broadcasting. Compared to other errored statuses in the Mux Video API, a simulcast may transition back into the broadcasting state if a connection with the service can be re-established.  | [optional] 
**stream_key** | **str** | Stream Key represents an stream identifier for the third party live streaming service to simulcast the parent live stream too. | [optional] 
**url** | **str** | RTMP hostname including the application name for the third party live streaming service. | [optional] 

## Example

```python
from openapi_client.models.simulcast_target import SimulcastTarget

# TODO update the JSON string below
json = "{}"
# create an instance of SimulcastTarget from a JSON string
simulcast_target_instance = SimulcastTarget.from_json(json)
# print the JSON string representation of the object
print(SimulcastTarget.to_json())

# convert the object into a dict
simulcast_target_dict = simulcast_target_instance.to_dict()
# create an instance of SimulcastTarget from a dict
simulcast_target_from_dict = SimulcastTarget.from_dict(simulcast_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


