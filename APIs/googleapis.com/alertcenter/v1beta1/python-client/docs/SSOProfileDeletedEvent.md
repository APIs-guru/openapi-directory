# SSOProfileDeletedEvent

Event occurred when SSO Profile deleted in customer's account. The event are being received from insight forwarder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_sso_profile_name** | **str** | sso profile name which got deleted | [optional] 

## Example

```python
from openapi_client.models.sso_profile_deleted_event import SSOProfileDeletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SSOProfileDeletedEvent from a JSON string
sso_profile_deleted_event_instance = SSOProfileDeletedEvent.from_json(json)
# print the JSON string representation of the object
print(SSOProfileDeletedEvent.to_json())

# convert the object into a dict
sso_profile_deleted_event_dict = sso_profile_deleted_event_instance.to_dict()
# create an instance of SSOProfileDeletedEvent from a dict
sso_profile_deleted_event_from_dict = SSOProfileDeletedEvent.from_dict(sso_profile_deleted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


