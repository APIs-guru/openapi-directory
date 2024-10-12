# UpdateOrganizationAlertsProfileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_condition** | [**CreateOrganizationAlertsProfileRequestAlertCondition**](CreateOrganizationAlertsProfileRequestAlertCondition.md) |  | [optional] 
**description** | **str** | User supplied description of the alert | [optional] 
**enabled** | **bool** | Is the alert config enabled | [optional] 
**network_tags** | **List[str]** | Networks with these tags will be monitored for the alert | [optional] 
**recipients** | [**CreateOrganizationAlertsProfileRequestRecipients**](CreateOrganizationAlertsProfileRequestRecipients.md) |  | [optional] 
**type** | **str** | The alert type | [optional] 

## Example

```python
from openapi_client.models.update_organization_alerts_profile_request import UpdateOrganizationAlertsProfileRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationAlertsProfileRequest from a JSON string
update_organization_alerts_profile_request_instance = UpdateOrganizationAlertsProfileRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationAlertsProfileRequest.to_json())

# convert the object into a dict
update_organization_alerts_profile_request_dict = update_organization_alerts_profile_request_instance.to_dict()
# create an instance of UpdateOrganizationAlertsProfileRequest from a dict
update_organization_alerts_profile_request_from_dict = UpdateOrganizationAlertsProfileRequest.from_dict(update_organization_alerts_profile_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


