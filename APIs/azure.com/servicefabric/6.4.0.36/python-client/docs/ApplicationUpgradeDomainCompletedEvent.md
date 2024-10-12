# ApplicationUpgradeDomainCompletedEvent

Application Upgrade Domain Completed event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_name** | **str** | Application type name. | 
**application_type_version** | **str** | Target Application type version. | 
**current_application_type_version** | **str** | Current Application type version. | 
**upgrade_domain_elapsed_time_in_ms** | **float** | Upgrade time of domain in milli-seconds. | 
**upgrade_domains** | **str** | Upgrade domains. | 
**upgrade_state** | **str** | State of upgrade. | 

## Example

```python
from openapi_client.models.application_upgrade_domain_completed_event import ApplicationUpgradeDomainCompletedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpgradeDomainCompletedEvent from a JSON string
application_upgrade_domain_completed_event_instance = ApplicationUpgradeDomainCompletedEvent.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpgradeDomainCompletedEvent.to_json())

# convert the object into a dict
application_upgrade_domain_completed_event_dict = application_upgrade_domain_completed_event_instance.to_dict()
# create an instance of ApplicationUpgradeDomainCompletedEvent from a dict
application_upgrade_domain_completed_event_from_dict = ApplicationUpgradeDomainCompletedEvent.from_dict(application_upgrade_domain_completed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


