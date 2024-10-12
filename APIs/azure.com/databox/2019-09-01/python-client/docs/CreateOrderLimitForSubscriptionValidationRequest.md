# CreateOrderLimitForSubscriptionValidationRequest

Request to validate create order limit for current subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type** | **str** | Device type to be used for the job. | 

## Example

```python
from openapi_client.models.create_order_limit_for_subscription_validation_request import CreateOrderLimitForSubscriptionValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderLimitForSubscriptionValidationRequest from a JSON string
create_order_limit_for_subscription_validation_request_instance = CreateOrderLimitForSubscriptionValidationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrderLimitForSubscriptionValidationRequest.to_json())

# convert the object into a dict
create_order_limit_for_subscription_validation_request_dict = create_order_limit_for_subscription_validation_request_instance.to_dict()
# create an instance of CreateOrderLimitForSubscriptionValidationRequest from a dict
create_order_limit_for_subscription_validation_request_from_dict = CreateOrderLimitForSubscriptionValidationRequest.from_dict(create_order_limit_for_subscription_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


