# SubscriptionValidationEventData

Schema of the Data property of an EventGridEvent for a Microsoft.EventGrid.SubscriptionValidationEvent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation_code** | **str** | The validation code sent by Azure Event Grid to validate an event subscription. To complete the validation handshake, the subscriber must either respond with this validation code as part of the validation response, or perform a GET request on the validationUrl (available starting version 2018-05-01-preview). | [optional] [readonly] 
**validation_url** | **str** | The validation URL sent by Azure Event Grid (available starting version 2018-05-01-preview). To complete the validation handshake, the subscriber must either respond with the validationCode as part of the validation response, or perform a GET request on the validationUrl (available starting version 2018-05-01-preview). | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_validation_event_data import SubscriptionValidationEventData

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionValidationEventData from a JSON string
subscription_validation_event_data_instance = SubscriptionValidationEventData.from_json(json)
# print the JSON string representation of the object
print(SubscriptionValidationEventData.to_json())

# convert the object into a dict
subscription_validation_event_data_dict = subscription_validation_event_data_instance.to_dict()
# create an instance of SubscriptionValidationEventData from a dict
subscription_validation_event_data_from_dict = SubscriptionValidationEventData.from_dict(subscription_validation_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


