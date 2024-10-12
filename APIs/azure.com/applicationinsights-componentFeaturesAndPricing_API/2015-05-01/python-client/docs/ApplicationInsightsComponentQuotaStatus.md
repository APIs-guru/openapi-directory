# ApplicationInsightsComponentQuotaStatus

An Application Insights component daily data volume cap status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The Application ID for the Application Insights component. | [optional] [readonly] 
**expiration_time** | **str** | Date and time when the daily data volume cap will be reset, and data ingestion will resume. | [optional] [readonly] 
**should_be_throttled** | **bool** | The daily data volume cap is met, and data ingestion will be stopped. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_insights_component_quota_status import ApplicationInsightsComponentQuotaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentQuotaStatus from a JSON string
application_insights_component_quota_status_instance = ApplicationInsightsComponentQuotaStatus.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentQuotaStatus.to_json())

# convert the object into a dict
application_insights_component_quota_status_dict = application_insights_component_quota_status_instance.to_dict()
# create an instance of ApplicationInsightsComponentQuotaStatus from a dict
application_insights_component_quota_status_from_dict = ApplicationInsightsComponentQuotaStatus.from_dict(application_insights_component_quota_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


