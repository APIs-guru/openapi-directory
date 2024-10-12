# SubscriptionContract

Subscription details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionContractProperties**](SubscriptionContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_contract import SubscriptionContract

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionContract from a JSON string
subscription_contract_instance = SubscriptionContract.from_json(json)
# print the JSON string representation of the object
print(SubscriptionContract.to_json())

# convert the object into a dict
subscription_contract_dict = subscription_contract_instance.to_dict()
# create an instance of SubscriptionContract from a dict
subscription_contract_from_dict = SubscriptionContract.from_dict(subscription_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


