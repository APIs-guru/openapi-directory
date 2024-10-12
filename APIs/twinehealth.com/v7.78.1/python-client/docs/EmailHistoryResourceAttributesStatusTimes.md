# EmailHistoryResourceAttributesStatusTimes

Status of email. Multiple statuses may be defined. The current status is the one with the most recent date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounce** | **str** | Time email was bounced. | [optional] 
**click** | **str** | Time email was clicked. | [optional] 
**deferred** | **str** | Time email was deferred. | [optional] 
**delivered** | **str** | Time email was delivered. | [optional] 
**dropped** | **str** | Time email was dropped. | [optional] 
**open** | **str** | Time email was opened. | [optional] 
**processed** | **str** | Time email was processed. | [optional] 
**spamreport** | **str** | Time email was reported as spam. | [optional] 
**unsubscribe** | **str** | Time email was unsubscribed from. | [optional] 

## Example

```python
from openapi_client.models.email_history_resource_attributes_status_times import EmailHistoryResourceAttributesStatusTimes

# TODO update the JSON string below
json = "{}"
# create an instance of EmailHistoryResourceAttributesStatusTimes from a JSON string
email_history_resource_attributes_status_times_instance = EmailHistoryResourceAttributesStatusTimes.from_json(json)
# print the JSON string representation of the object
print(EmailHistoryResourceAttributesStatusTimes.to_json())

# convert the object into a dict
email_history_resource_attributes_status_times_dict = email_history_resource_attributes_status_times_instance.to_dict()
# create an instance of EmailHistoryResourceAttributesStatusTimes from a dict
email_history_resource_attributes_status_times_from_dict = EmailHistoryResourceAttributesStatusTimes.from_dict(email_history_resource_attributes_status_times_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


