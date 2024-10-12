# AddOrderDealsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[MarketplaceDeal]**](MarketplaceDeal.md) | List of deals added (in the same proposal as passed in the request) | [optional] 
**proposal_revision_number** | **str** | The updated revision number for the proposal. | [optional] 

## Example

```python
from openapi_client.models.add_order_deals_response import AddOrderDealsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddOrderDealsResponse from a JSON string
add_order_deals_response_instance = AddOrderDealsResponse.from_json(json)
# print the JSON string representation of the object
print(AddOrderDealsResponse.to_json())

# convert the object into a dict
add_order_deals_response_dict = add_order_deals_response_instance.to_dict()
# create an instance of AddOrderDealsResponse from a dict
add_order_deals_response_from_dict = AddOrderDealsResponse.from_dict(add_order_deals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


