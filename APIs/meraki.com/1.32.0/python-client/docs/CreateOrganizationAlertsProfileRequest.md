# CreateOrganizationAlertsProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_condition** | [**CreateOrganizationAlertsProfileRequestAlertCondition**](CreateOrganizationAlertsProfileRequestAlertCondition.md) |  | 
**description** | **str** | User supplied description of the alert | [optional] 
**network_tags** | **List[str]** | Networks with these tags will be monitored for the alert | 
**recipients** | [**CreateOrganizationAlertsProfileRequestRecipients**](CreateOrganizationAlertsProfileRequestRecipients.md) |  | 
**type** | **str** | The alert type | 

## Example

```python
from openapi_client.models.create_organization_alerts_profile_request import CreateOrganizationAlertsProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationAlertsProfileRequest from a JSON string
create_organization_alerts_profile_request_instance = CreateOrganizationAlertsProfileRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationAlertsProfileRequest.to_json())

# convert the object into a dict
create_organization_alerts_profile_request_dict = create_organization_alerts_profile_request_instance.to_dict()
# create an instance of CreateOrganizationAlertsProfileRequest from a dict
create_organization_alerts_profile_request_from_dict = CreateOrganizationAlertsProfileRequest.from_dict(create_organization_alerts_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


