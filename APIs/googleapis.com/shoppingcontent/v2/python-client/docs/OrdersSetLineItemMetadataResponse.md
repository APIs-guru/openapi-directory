# OrdersSetLineItemMetadataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersSetLineItemMetadataResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_set_line_item_metadata_response import OrdersSetLineItemMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersSetLineItemMetadataResponse from a JSON string
orders_set_line_item_metadata_response_instance = OrdersSetLineItemMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersSetLineItemMetadataResponse.to_json())

# convert the object into a dict
orders_set_line_item_metadata_response_dict = orders_set_line_item_metadata_response_instance.to_dict()
# create an instance of OrdersSetLineItemMetadataResponse from a dict
orders_set_line_item_metadata_response_from_dict = OrdersSetLineItemMetadataResponse.from_dict(orders_set_line_item_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


