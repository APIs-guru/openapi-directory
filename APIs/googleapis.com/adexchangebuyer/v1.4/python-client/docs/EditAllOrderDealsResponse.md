# EditAllOrderDealsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[MarketplaceDeal]**](MarketplaceDeal.md) | List of all deals in the proposal after edit. | [optional] 
**order_revision_number** | **str** | The latest revision number after the update has been applied. | [optional] 

## Example

```python
from openapi_client.models.edit_all_order_deals_response import EditAllOrderDealsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EditAllOrderDealsResponse from a JSON string
edit_all_order_deals_response_instance = EditAllOrderDealsResponse.from_json(json)
# print the JSON string representation of the object
print(EditAllOrderDealsResponse.to_json())

# convert the object into a dict
edit_all_order_deals_response_dict = edit_all_order_deals_response_instance.to_dict()
# create an instance of EditAllOrderDealsResponse from a dict
edit_all_order_deals_response_from_dict = EditAllOrderDealsResponse.from_dict(edit_all_order_deals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


