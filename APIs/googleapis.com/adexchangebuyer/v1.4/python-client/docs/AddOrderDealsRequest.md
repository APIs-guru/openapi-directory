# AddOrderDealsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[MarketplaceDeal]**](MarketplaceDeal.md) | The list of deals to add | [optional] 
**proposal_revision_number** | **str** | The last known proposal revision number. | [optional] 
**update_action** | **str** | Indicates an optional action to take on the proposal | [optional] 

## Example

```python
from openapi_client.models.add_order_deals_request import AddOrderDealsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrderDealsRequest from a JSON string
add_order_deals_request_instance = AddOrderDealsRequest.from_json(json)
# print the JSON string representation of the object
print(AddOrderDealsRequest.to_json())

# convert the object into a dict
add_order_deals_request_dict = add_order_deals_request_instance.to_dict()
# create an instance of AddOrderDealsRequest from a dict
add_order_deals_request_from_dict = AddOrderDealsRequest.from_dict(add_order_deals_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


