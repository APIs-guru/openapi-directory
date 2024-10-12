# SignalRProperties

A class that describes the properties of the SignalR service that should contain more read-only properties than AzSignalR.Models.SignalRCreateOrUpdateProperties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_ip** | **str** | The publicly accessible IP of the SignalR service. | [optional] [readonly] 
**host_name** | **str** | FQDN of the SignalR service instance. Format: xxx.service.signalr.net | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] [readonly] 
**public_port** | **int** | The publicly accessibly port of the SignalR service which is designed for browser/client side usage. | [optional] [readonly] 
**server_port** | **int** | The publicly accessibly port of the SignalR service which is designed for customer server side usage. | [optional] [readonly] 
**version** | **str** | Version of the SignalR resource. Probably you need the same or higher version of client SDKs. | [optional] 
**host_name_prefix** | **str** | Prefix for the hostName of the SignalR service. Retained for future use.  The hostname will be of format: &amp;lt;hostNamePrefix&amp;gt;.service.signalr.net. | [optional] 

## Example

```python
from openapi_client.models.signal_r_properties import SignalRProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRProperties from a JSON string
signal_r_properties_instance = SignalRProperties.from_json(json)
# print the JSON string representation of the object
print(SignalRProperties.to_json())

# convert the object into a dict
signal_r_properties_dict = signal_r_properties_instance.to_dict()
# create an instance of SignalRProperties from a dict
signal_r_properties_from_dict = SignalRProperties.from_dict(signal_r_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


