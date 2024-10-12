# ListInsertionOrdersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insertion_orders** | [**List[InsertionOrder]**](InsertionOrder.md) | The list of insertion orders. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListInsertionOrders&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_insertion_orders_response import ListInsertionOrdersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInsertionOrdersResponse from a JSON string
list_insertion_orders_response_instance = ListInsertionOrdersResponse.from_json(json)
# print the JSON string representation of the object
print(ListInsertionOrdersResponse.to_json())

# convert the object into a dict
list_insertion_orders_response_dict = list_insertion_orders_response_instance.to_dict()
# create an instance of ListInsertionOrdersResponse from a dict
list_insertion_orders_response_from_dict = ListInsertionOrdersResponse.from_dict(list_insertion_orders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


