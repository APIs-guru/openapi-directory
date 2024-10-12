# DeleteOrderDealsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[MarketplaceDeal]**](MarketplaceDeal.md) | List of deals deleted (in the same proposal as passed in the request) | [optional] 
**proposal_revision_number** | **str** | The updated revision number for the proposal. | [optional] 

## Example

```python
from openapi_client.models.delete_order_deals_response import DeleteOrderDealsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteOrderDealsResponse from a JSON string
delete_order_deals_response_instance = DeleteOrderDealsResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteOrderDealsResponse.to_json())

# convert the object into a dict
delete_order_deals_response_dict = delete_order_deals_response_instance.to_dict()
# create an instance of DeleteOrderDealsResponse from a dict
delete_order_deals_response_from_dict = DeleteOrderDealsResponse.from_dict(delete_order_deals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


