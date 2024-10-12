# SubscriptionListDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.subscription_list_default_response_details_inner import SubscriptionListDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionListDefaultResponseDetailsInner from a JSON string
subscription_list_default_response_details_inner_instance = SubscriptionListDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(SubscriptionListDefaultResponseDetailsInner.to_json())

# convert the object into a dict
subscription_list_default_response_details_inner_dict = subscription_list_default_response_details_inner_instance.to_dict()
# create an instance of SubscriptionListDefaultResponseDetailsInner from a dict
subscription_list_default_response_details_inner_from_dict = SubscriptionListDefaultResponseDetailsInner.from_dict(subscription_list_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


