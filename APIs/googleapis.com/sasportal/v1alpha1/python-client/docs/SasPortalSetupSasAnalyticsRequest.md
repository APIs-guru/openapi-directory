# SasPortalSetupSasAnalyticsRequest

Request for the SetupSasAnalytics rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | Optional. User id to setup analytics for, if not provided the user id associated with the project is used. optional | [optional] 

## Example

```python
from openapi_client.models.sas_portal_setup_sas_analytics_request import SasPortalSetupSasAnalyticsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalSetupSasAnalyticsRequest from a JSON string
sas_portal_setup_sas_analytics_request_instance = SasPortalSetupSasAnalyticsRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalSetupSasAnalyticsRequest.to_json())

# convert the object into a dict
sas_portal_setup_sas_analytics_request_dict = sas_portal_setup_sas_analytics_request_instance.to_dict()
# create an instance of SasPortalSetupSasAnalyticsRequest from a dict
sas_portal_setup_sas_analytics_request_from_dict = SasPortalSetupSasAnalyticsRequest.from_dict(sas_portal_setup_sas_analytics_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


