# EditAllOrderDealsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[MarketplaceDeal]**](MarketplaceDeal.md) | List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest. | [optional] 
**proposal** | [**Proposal**](Proposal.md) |  | [optional] 
**proposal_revision_number** | **str** | The last known revision number for the proposal. | [optional] 
**update_action** | **str** | Indicates an optional action to take on the proposal | [optional] 

## Example

```python
from openapi_client.models.edit_all_order_deals_request import EditAllOrderDealsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EditAllOrderDealsRequest from a JSON string
edit_all_order_deals_request_instance = EditAllOrderDealsRequest.from_json(json)
# print the JSON string representation of the object
print(EditAllOrderDealsRequest.to_json())

# convert the object into a dict
edit_all_order_deals_request_dict = edit_all_order_deals_request_instance.to_dict()
# create an instance of EditAllOrderDealsRequest from a dict
edit_all_order_deals_request_from_dict = EditAllOrderDealsRequest.from_dict(edit_all_order_deals_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


