# SubscriptionsListDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.subscriptions_list_default_response_details_inner import SubscriptionsListDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionsListDefaultResponseDetailsInner from a JSON string
subscriptions_list_default_response_details_inner_instance = SubscriptionsListDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(SubscriptionsListDefaultResponseDetailsInner.to_json())

# convert the object into a dict
subscriptions_list_default_response_details_inner_dict = subscriptions_list_default_response_details_inner_instance.to_dict()
# create an instance of SubscriptionsListDefaultResponseDetailsInner from a dict
subscriptions_list_default_response_details_inner_from_dict = SubscriptionsListDefaultResponseDetailsInner.from_dict(subscriptions_list_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


