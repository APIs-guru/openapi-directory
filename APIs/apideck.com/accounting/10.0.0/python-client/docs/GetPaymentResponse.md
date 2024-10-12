# GetPaymentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Payment**](Payment.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_payment_response import GetPaymentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPaymentResponse from a JSON string
get_payment_response_instance = GetPaymentResponse.from_json(json)
# print the JSON string representation of the object
print(GetPaymentResponse.to_json())

# convert the object into a dict
get_payment_response_dict = get_payment_response_instance.to_dict()
# create an instance of GetPaymentResponse from a dict
get_payment_response_from_dict = GetPaymentResponse.from_dict(get_payment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


