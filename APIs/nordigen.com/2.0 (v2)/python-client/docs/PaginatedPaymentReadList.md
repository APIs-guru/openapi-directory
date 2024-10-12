# PaginatedPaymentReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[PaymentRead]**](PaymentRead.md) |  | [optional] 

## Example

```python
from openapi_client.models.paginated_payment_read_list import PaginatedPaymentReadList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedPaymentReadList from a JSON string
paginated_payment_read_list_instance = PaginatedPaymentReadList.from_json(json)
# print the JSON string representation of the object
print(PaginatedPaymentReadList.to_json())

# convert the object into a dict
paginated_payment_read_list_dict = paginated_payment_read_list_instance.to_dict()
# create an instance of PaginatedPaymentReadList from a dict
paginated_payment_read_list_from_dict = PaginatedPaymentReadList.from_dict(paginated_payment_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


