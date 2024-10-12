# SubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **datetime** | Date-time when subscriber opted-in. Required if singleoptin is true. | [optional] 
**email** | **str** | Email address of the subscriber | 
**fullname** | **str** | Full name (Last name, First Name) of the subscriber  | [optional] 
**ip** | **str** | Origin Ip of the subscriber when he/she opted-in. Required if singleoptin is true. | [optional] 
**lang** | **str** | ISO 639-1 language code of the subscriber. When lang is one the supported system language, all communication will be in this language.  | [optional] 
**singleoptin** | **bool** | If true, no email will be sent asking user subscription confirmation. In that case, you must provide the confirmation date (confirmed) and origin ip (ip) manually.  | [optional] 

## Example

```python
from openapi_client.models.subscription_request import SubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionRequest from a JSON string
subscription_request_instance = SubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(SubscriptionRequest.to_json())

# convert the object into a dict
subscription_request_dict = subscription_request_instance.to_dict()
# create an instance of SubscriptionRequest from a dict
subscription_request_from_dict = SubscriptionRequest.from_dict(subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


