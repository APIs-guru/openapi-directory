# SubscriptionListDefaultResponseErrorDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.subscription_list_default_response_error_details_inner import SubscriptionListDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListDefaultResponseErrorDetailsInner from a JSON string
subscription_list_default_response_error_details_inner_instance = SubscriptionListDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(SubscriptionListDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
subscription_list_default_response_error_details_inner_dict = subscription_list_default_response_error_details_inner_instance.to_dict()
# create an instance of SubscriptionListDefaultResponseErrorDetailsInner from a dict
subscription_list_default_response_error_details_inner_from_dict = SubscriptionListDefaultResponseErrorDetailsInner.from_dict(subscription_list_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


