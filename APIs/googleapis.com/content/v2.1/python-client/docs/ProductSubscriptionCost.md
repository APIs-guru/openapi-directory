# ProductSubscriptionCost


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Price**](Price.md) |  | [optional] 
**period** | **str** | The type of subscription period. | [optional] 
**period_length** | **str** | The number of subscription periods the buyer has to pay. | [optional] 

## Example

```python
from openapi_client.models.product_subscription_cost import ProductSubscriptionCost

# TODO update the JSON string below
json = "{}"
# create an instance of ProductSubscriptionCost from a JSON string
product_subscription_cost_instance = ProductSubscriptionCost.from_json(json)
# print the JSON string representation of the object
print(ProductSubscriptionCost.to_json())

# convert the object into a dict
product_subscription_cost_dict = product_subscription_cost_instance.to_dict()
# create an instance of ProductSubscriptionCost from a dict
product_subscription_cost_from_dict = ProductSubscriptionCost.from_dict(product_subscription_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


