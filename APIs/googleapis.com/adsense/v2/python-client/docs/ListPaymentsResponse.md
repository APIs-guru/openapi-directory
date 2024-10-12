# ListPaymentsResponse

Response definition for the payments list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**List[Payment]**](Payment.md) | The payments returned in this list response. | [optional] 

## Example

```python
from openapi_client.models.list_payments_response import ListPaymentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPaymentsResponse from a JSON string
list_payments_response_instance = ListPaymentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPaymentsResponse.to_json())

# convert the object into a dict
list_payments_response_dict = list_payments_response_instance.to_dict()
# create an instance of ListPaymentsResponse from a dict
list_payments_response_from_dict = ListPaymentsResponse.from_dict(list_payments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


