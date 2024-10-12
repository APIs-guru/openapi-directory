# OrderreturnsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#orderreturnsListResponse&#x60;\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of returns. | [optional] 
**resources** | [**List[MerchantOrderReturn]**](MerchantOrderReturn.md) |  | [optional] 

## Example

```python
from openapi_client.models.orderreturns_list_response import OrderreturnsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsListResponse from a JSON string
orderreturns_list_response_instance = OrderreturnsListResponse.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsListResponse.to_json())

# convert the object into a dict
orderreturns_list_response_dict = orderreturns_list_response_instance.to_dict()
# create an instance of OrderreturnsListResponse from a dict
orderreturns_list_response_from_dict = OrderreturnsListResponse.from_dict(orderreturns_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


