# CustomerSubscriptionProperties

Customer subscription properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | Tenant Id. | [optional] 

## Example

```python
from openapi_client.models.customer_subscription_properties import CustomerSubscriptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSubscriptionProperties from a JSON string
customer_subscription_properties_instance = CustomerSubscriptionProperties.from_json(json)
# print the JSON string representation of the object
print(CustomerSubscriptionProperties.to_json())

# convert the object into a dict
customer_subscription_properties_dict = customer_subscription_properties_instance.to_dict()
# create an instance of CustomerSubscriptionProperties from a dict
customer_subscription_properties_from_dict = CustomerSubscriptionProperties.from_dict(customer_subscription_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


