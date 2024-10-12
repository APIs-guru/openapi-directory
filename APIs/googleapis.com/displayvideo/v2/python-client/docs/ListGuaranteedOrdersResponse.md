# ListGuaranteedOrdersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guaranteed_orders** | [**List[GuaranteedOrder]**](GuaranteedOrder.md) | The list of guaranteed orders. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListGuaranteedOrders&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_guaranteed_orders_response import ListGuaranteedOrdersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGuaranteedOrdersResponse from a JSON string
list_guaranteed_orders_response_instance = ListGuaranteedOrdersResponse.from_json(json)
# print the JSON string representation of the object
print(ListGuaranteedOrdersResponse.to_json())

# convert the object into a dict
list_guaranteed_orders_response_dict = list_guaranteed_orders_response_instance.to_dict()
# create an instance of ListGuaranteedOrdersResponse from a dict
list_guaranteed_orders_response_from_dict = ListGuaranteedOrdersResponse.from_dict(list_guaranteed_orders_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


