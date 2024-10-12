# ConnectivityParameters

Parameters that determine how the connectivity check will be performed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ConnectivityDestination**](ConnectivityDestination.md) |  | 
**preferred_ip_version** | **str** | IP address version. | [optional] 
**protocol** | **str** | Network protocol. | [optional] 
**protocol_configuration** | [**ProtocolConfiguration**](ProtocolConfiguration.md) |  | [optional] 
**source** | [**ConnectivitySource**](ConnectivitySource.md) |  | 

## Example

```python
from openapi_client.models.connectivity_parameters import ConnectivityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityParameters from a JSON string
connectivity_parameters_instance = ConnectivityParameters.from_json(json)
# print the JSON string representation of the object
print(ConnectivityParameters.to_json())

# convert the object into a dict
connectivity_parameters_dict = connectivity_parameters_instance.to_dict()
# create an instance of ConnectivityParameters from a dict
connectivity_parameters_from_dict = ConnectivityParameters.from_dict(connectivity_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


