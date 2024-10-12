# Budget

The configuration data for Ad Exchange RTB - Budget API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The id of the account. This is required for get and update requests. | [optional] 
**billing_id** | **str** | The billing id to determine which adgroup to provide budget information for. This is required for get and update requests. | [optional] 
**budget_amount** | **str** | The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests. | [optional] 
**currency_code** | **str** | The currency code for the buyer. This cannot be altered here. | [optional] 
**id** | **str** | The unique id that describes this item. | [optional] 
**kind** | **str** | The kind of the resource, i.e. \&quot;adexchangebuyer#budget\&quot;. | [optional] [default to 'adexchangebuyer#budget']

## Example

```python
from openapi_client.models.budget import Budget

# TODO update the JSON string below
json = "{}"
# create an instance of Budget from a JSON string
budget_instance = Budget.from_json(json)
# print the JSON string representation of the object
print(Budget.to_json())

# convert the object into a dict
budget_dict = budget_instance.to_dict()
# create an instance of Budget from a dict
budget_from_dict = Budget.from_dict(budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


