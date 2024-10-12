# CreateDraftAppRecoveryRequest

Request message for CreateDraftAppRecovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_in_app_update** | [**RemoteInAppUpdate**](RemoteInAppUpdate.md) |  | [optional] 
**targeting** | [**Targeting**](Targeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_draft_app_recovery_request import CreateDraftAppRecoveryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDraftAppRecoveryRequest from a JSON string
create_draft_app_recovery_request_instance = CreateDraftAppRecoveryRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDraftAppRecoveryRequest.to_json())

# convert the object into a dict
create_draft_app_recovery_request_dict = create_draft_app_recovery_request_instance.to_dict()
# create an instance of CreateDraftAppRecoveryRequest from a dict
create_draft_app_recovery_request_from_dict = CreateDraftAppRecoveryRequest.from_dict(create_draft_app_recovery_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


