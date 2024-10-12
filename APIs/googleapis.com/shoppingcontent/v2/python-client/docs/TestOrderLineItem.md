# TestOrderLineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**TestOrderLineItemProduct**](TestOrderLineItemProduct.md) |  | [optional] 
**quantity_ordered** | **int** | Required. Number of items ordered. | [optional] 
**return_info** | [**OrderLineItemReturnInfo**](OrderLineItemReturnInfo.md) |  | [optional] 
**shipping_details** | [**OrderLineItemShippingDetails**](OrderLineItemShippingDetails.md) |  | [optional] 
**unit_tax** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_order_line_item import TestOrderLineItem

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderLineItem from a JSON string
test_order_line_item_instance = TestOrderLineItem.from_json(json)
# print the JSON string representation of the object
print(TestOrderLineItem.to_json())

# convert the object into a dict
test_order_line_item_dict = test_order_line_item_instance.to_dict()
# create an instance of TestOrderLineItem from a dict
test_order_line_item_from_dict = TestOrderLineItem.from_dict(test_order_line_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


