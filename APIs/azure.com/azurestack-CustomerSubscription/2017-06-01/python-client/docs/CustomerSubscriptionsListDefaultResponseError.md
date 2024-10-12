# CustomerSubscriptionsListDefaultResponseError

The details of the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] [readonly] 
**message** | **str** | Error message indicating why the operation failed. | [optional] [readonly] 
**target** | **str** | The target of the particular error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.customer_subscriptions_list_default_response_error import CustomerSubscriptionsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerSubscriptionsListDefaultResponseError from a JSON string
customer_subscriptions_list_default_response_error_instance = CustomerSubscriptionsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(CustomerSubscriptionsListDefaultResponseError.to_json())

# convert the object into a dict
customer_subscriptions_list_default_response_error_dict = customer_subscriptions_list_default_response_error_instance.to_dict()
# create an instance of CustomerSubscriptionsListDefaultResponseError from a dict
customer_subscriptions_list_default_response_error_from_dict = CustomerSubscriptionsListDefaultResponseError.from_dict(customer_subscriptions_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


