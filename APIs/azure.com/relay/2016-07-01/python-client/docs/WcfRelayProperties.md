# WcfRelayProperties

Properties of the WcfRelay Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The time the WCFRelay was created. | [optional] [readonly] 
**is_dynamic** | **bool** | true if the relay is dynamic; otherwise, false. | [optional] [readonly] 
**listener_count** | **int** | The number of listeners for this relay. min : 1 and max:25 supported | [optional] [readonly] 
**relay_type** | **str** | WCFRelay Type. | [optional] 
**requires_client_authorization** | **bool** | true if client authorization is needed for this relay; otherwise, false. | [optional] 
**requires_transport_security** | **bool** | true if transport security is needed for this relay; otherwise, false. | [optional] 
**updated_at** | **datetime** | The time the namespace was updated. | [optional] [readonly] 
**user_metadata** | **str** | usermetadata is a placeholder to store user-defined string data for the HybridConnection endpoint.e.g. it can be used to store  descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. | [optional] 

## Example

```python
from openapi_client.models.wcf_relay_properties import WcfRelayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WcfRelayProperties from a JSON string
wcf_relay_properties_instance = WcfRelayProperties.from_json(json)
# print the JSON string representation of the object
print(WcfRelayProperties.to_json())

# convert the object into a dict
wcf_relay_properties_dict = wcf_relay_properties_instance.to_dict()
# create an instance of WcfRelayProperties from a dict
wcf_relay_properties_from_dict = WcfRelayProperties.from_dict(wcf_relay_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


