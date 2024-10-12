# OrderLineItemReturnInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_to_return** | **int** | Required. How many days later the item can be returned. | [optional] 
**is_returnable** | **bool** | Required. Whether the item is returnable. | [optional] 
**policy_url** | **str** | Required. URL of the item return policy. | [optional] 

## Example

```python
from openapi_client.models.order_line_item_return_info import OrderLineItemReturnInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OrderLineItemReturnInfo from a JSON string
order_line_item_return_info_instance = OrderLineItemReturnInfo.from_json(json)
# print the JSON string representation of the object
print(OrderLineItemReturnInfo.to_json())

# convert the object into a dict
order_line_item_return_info_dict = order_line_item_return_info_instance.to_dict()
# create an instance of OrderLineItemReturnInfo from a dict
order_line_item_return_info_from_dict = OrderLineItemReturnInfo.from_dict(order_line_item_return_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


