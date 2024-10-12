# DeleteOrderDealsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal_ids** | **List[str]** | List of deals to delete for a given proposal | [optional] 
**proposal_revision_number** | **str** | The last known proposal revision number. | [optional] 
**update_action** | **str** | Indicates an optional action to take on the proposal | [optional] 

## Example

```python
from openapi_client.models.delete_order_deals_request import DeleteOrderDealsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteOrderDealsRequest from a JSON string
delete_order_deals_request_instance = DeleteOrderDealsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteOrderDealsRequest.to_json())

# convert the object into a dict
delete_order_deals_request_dict = delete_order_deals_request_instance.to_dict()
# create an instance of DeleteOrderDealsRequest from a dict
delete_order_deals_request_from_dict = DeleteOrderDealsRequest.from_dict(delete_order_deals_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


