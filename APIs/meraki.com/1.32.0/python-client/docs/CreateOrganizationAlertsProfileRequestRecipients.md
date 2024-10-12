# CreateOrganizationAlertsProfileRequestRecipients

List of recipients that will recieve the alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | A list of emails that will receive information about the alert | [optional] 
**http_server_ids** | **List[str]** | A list base64 encoded urls of webhook endpoints that will receive information about the alert | [optional] 

## Example

```python
from openapi_client.models.create_organization_alerts_profile_request_recipients import CreateOrganizationAlertsProfileRequestRecipients

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAlertsProfileRequestRecipients from a JSON string
create_organization_alerts_profile_request_recipients_instance = CreateOrganizationAlertsProfileRequestRecipients.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAlertsProfileRequestRecipients.to_json())

# convert the object into a dict
create_organization_alerts_profile_request_recipients_dict = create_organization_alerts_profile_request_recipients_instance.to_dict()
# create an instance of CreateOrganizationAlertsProfileRequestRecipients from a dict
create_organization_alerts_profile_request_recipients_from_dict = CreateOrganizationAlertsProfileRequestRecipients.from_dict(create_organization_alerts_profile_request_recipients_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


