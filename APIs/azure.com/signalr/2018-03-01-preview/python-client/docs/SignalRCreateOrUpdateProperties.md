# SignalRCreateOrUpdateProperties

Settings used to provision or configure the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_name_prefix** | **str** | Prefix for the hostName of the SignalR service. Retained for future use.  The hostname will be of format: &amp;lt;hostNamePrefix&amp;gt;.service.signalr.net. | [optional] 

## Example

```python
from openapi_client.models.signal_r_create_or_update_properties import SignalRCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRCreateOrUpdateProperties from a JSON string
signal_r_create_or_update_properties_instance = SignalRCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(SignalRCreateOrUpdateProperties.to_json())

# convert the object into a dict
signal_r_create_or_update_properties_dict = signal_r_create_or_update_properties_instance.to_dict()
# create an instance of SignalRCreateOrUpdateProperties from a dict
signal_r_create_or_update_properties_from_dict = SignalRCreateOrUpdateProperties.from_dict(signal_r_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


