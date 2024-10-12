# SubscriptionBillingSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_seats_allocated** | **int** | Number of allocated application cells permitted to work with the API | 
**app_seats_permitted** | **int** | Number of permitted application to work with the same API account | 
**data_calls_balance** | **int** | Represents actual value of remained data API calls | 
**data_calls_limit** | **int** | Represents the limit of data API calls per \&quot;data_calls_limit_interval\&quot; value | 
**data_calls_limit_interval** | **int** | Represents an interval for the \&quot;data_calls_limit\&quot; value of current subscription | 
**docs_balance** | **int** | Current transaction balance. Applicable for pay-as-you-go subscriptions only | 
**docs_limit** | **int** | Represents the transactions limit per \&quot;docs_limit_interval\&quot; value | 
**docs_limit_interval** | **int** | Represents the timeframe for the \&quot;docs_limit\&quot; value of current subscription | 
**docs_suggested** | **int** | Represents the amount of favorable documents suggested for throughput subscriptions | 
**docs_suggested_interval** | **int** | Represents the timeframe for the “docs_suggested” value of the current subscription | 
**expiration_date** | **str** | Expiration date of current subscription. Defined as a Unix time stamp | 
**limit_type** | **str** | Subscription type can have either pay-as-you-go or throughput value | 
**polling_calls_balance** | **int** | Represents actual value of remained polling API calls | 
**polling_calls_limit** | **int** | Represents the limit of polling API calls per \&quot;polling_calls_limit_interval\&quot; value | 
**polling_calls_limit_interval** | **int** | Represents an interval for the \&quot;polling_calls_limit\&quot; value of current subscription | 
**priority** | **str** | Processing priority of current subscriber. Can have low, normal or high value | 
**settings_calls_balance** | **int** | Represents actual value of remained settings API calls | 
**settings_calls_limit** | **int** | Represents the limit of settings API calls per \&quot;settings_calls_limit_interval\&quot; value | 
**settings_calls_limit_interval** | **int** | Represents an interval for the \&quot;settings_calls_limit\&quot; value of current subscription | 

## Example

```python
from openapi_client.models.subscription_billing_section import SubscriptionBillingSection

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionBillingSection from a JSON string
subscription_billing_section_instance = SubscriptionBillingSection.from_json(json)
# print the JSON string representation of the object
print(SubscriptionBillingSection.to_json())

# convert the object into a dict
subscription_billing_section_dict = subscription_billing_section_instance.to_dict()
# create an instance of SubscriptionBillingSection from a dict
subscription_billing_section_from_dict = SubscriptionBillingSection.from_dict(subscription_billing_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


