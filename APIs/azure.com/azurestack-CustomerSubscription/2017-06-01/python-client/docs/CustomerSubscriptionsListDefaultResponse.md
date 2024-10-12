# CustomerSubscriptionsListDefaultResponse

Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CustomerSubscriptionsListDefaultResponseError**](CustomerSubscriptionsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_subscriptions_list_default_response import CustomerSubscriptionsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSubscriptionsListDefaultResponse from a JSON string
customer_subscriptions_list_default_response_instance = CustomerSubscriptionsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(CustomerSubscriptionsListDefaultResponse.to_json())

# convert the object into a dict
customer_subscriptions_list_default_response_dict = customer_subscriptions_list_default_response_instance.to_dict()
# create an instance of CustomerSubscriptionsListDefaultResponse from a dict
customer_subscriptions_list_default_response_from_dict = CustomerSubscriptionsListDefaultResponse.from_dict(customer_subscriptions_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


