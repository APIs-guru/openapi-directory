# Subscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country Code. | [optional] 
**ecomm** | **str** | Ecommerce indicator. \&quot;yes\&quot; or \&quot;no\&quot; are the options. | [optional] 
**period** | **str** | Indicates the period covered by the data with possible values of - day, week, month, quarter, annual | [optional] 
**report_type** | **str** | Report type name, today the only report supported is \&quot;monitor\&quot;. | [optional] 
**sector** | **str** | Sector name. | [optional] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


