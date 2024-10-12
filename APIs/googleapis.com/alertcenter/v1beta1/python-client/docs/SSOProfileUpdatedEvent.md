# SSOProfileUpdatedEvent

Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_sso_profile_changes** | **str** | changes made to sso profile | [optional] 
**inbound_sso_profile_name** | **str** | sso profile name which got updated | [optional] 

## Example

```python
from openapi_client.models.sso_profile_updated_event import SSOProfileUpdatedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SSOProfileUpdatedEvent from a JSON string
sso_profile_updated_event_instance = SSOProfileUpdatedEvent.from_json(json)
# print the JSON string representation of the object
print(SSOProfileUpdatedEvent.to_json())

# convert the object into a dict
sso_profile_updated_event_dict = sso_profile_updated_event_instance.to_dict()
# create an instance of SSOProfileUpdatedEvent from a dict
sso_profile_updated_event_from_dict = SSOProfileUpdatedEvent.from_dict(sso_profile_updated_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


