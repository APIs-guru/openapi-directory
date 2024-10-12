# CreateOrderLimitForSubscriptionValidationResponseProperties

Properties of create order limit for subscription validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Create order limit validation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_order_limit_for_subscription_validation_response_properties import CreateOrderLimitForSubscriptionValidationResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderLimitForSubscriptionValidationResponseProperties from a JSON string
create_order_limit_for_subscription_validation_response_properties_instance = CreateOrderLimitForSubscriptionValidationResponseProperties.from_json(json)
# print the JSON string representation of the object
print(CreateOrderLimitForSubscriptionValidationResponseProperties.to_json())

# convert the object into a dict
create_order_limit_for_subscription_validation_response_properties_dict = create_order_limit_for_subscription_validation_response_properties_instance.to_dict()
# create an instance of CreateOrderLimitForSubscriptionValidationResponseProperties from a dict
create_order_limit_for_subscription_validation_response_properties_from_dict = CreateOrderLimitForSubscriptionValidationResponseProperties.from_dict(create_order_limit_for_subscription_validation_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


