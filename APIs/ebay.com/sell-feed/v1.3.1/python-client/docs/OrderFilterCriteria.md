# OrderFilterCriteria

The type that defines the fields for the order filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**modified_date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**order_status** | **str** | The order status of the orders returned. If the filter is omitted from createOrderTask call, orders that are in both &lt;code&gt;ACTIVE &lt;/code&gt;and&lt;code&gt; COMPLETED&lt;/code&gt; states are returned. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/feed/types/api:OrderStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.order_filter_criteria import OrderFilterCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFilterCriteria from a JSON string
order_filter_criteria_instance = OrderFilterCriteria.from_json(json)
# print the JSON string representation of the object
print(OrderFilterCriteria.to_json())

# convert the object into a dict
order_filter_criteria_dict = order_filter_criteria_instance.to_dict()
# create an instance of OrderFilterCriteria from a dict
order_filter_criteria_from_dict = OrderFilterCriteria.from_dict(order_filter_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


