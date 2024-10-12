# Observation

Represents one beacon observed once.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertised_id** | [**AdvertisedId**](AdvertisedId.md) |  | [optional] 
**telemetry** | **bytearray** | The array of telemetry bytes received from the beacon. The server is responsible for parsing it. This field may frequently be empty, as with a beacon that transmits telemetry only occasionally. | [optional] 
**timestamp_ms** | **str** | Time when the beacon was observed. | [optional] 

## Example

```python
from openapi_client.models.observation import Observation

# TODO update the JSON string below
json = "{}"
# create an instance of Observation from a JSON string
observation_instance = Observation.from_json(json)
# print the JSON string representation of the object
print(Observation.to_json())

# convert the object into a dict
observation_dict = observation_instance.to_dict()
# create an instance of Observation from a dict
observation_from_dict = Observation.from_dict(observation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


