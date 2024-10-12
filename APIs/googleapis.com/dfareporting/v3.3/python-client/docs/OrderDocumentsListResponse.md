# OrderDocumentsListResponse

Order document List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#orderDocumentsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**order_documents** | [**List[OrderDocument]**](OrderDocument.md) | Order document collection | [optional] 

## Example

```python
from openapi_client.models.order_documents_list_response import OrderDocumentsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrderDocumentsListResponse from a JSON string
order_documents_list_response_instance = OrderDocumentsListResponse.from_json(json)
# print the JSON string representation of the object
print(OrderDocumentsListResponse.to_json())

# convert the object into a dict
order_documents_list_response_dict = order_documents_list_response_instance.to_dict()
# create an instance of OrderDocumentsListResponse from a dict
order_documents_list_response_from_dict = OrderDocumentsListResponse.from_dict(order_documents_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


