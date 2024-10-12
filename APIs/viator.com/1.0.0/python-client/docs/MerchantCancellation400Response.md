# MerchantCancellation400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_stamp** | **str** | **timestamp** of *this* response | [optional] 
**error_codes** | **List[str]** | **array** of error codes pertaining to *this* error - See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes  | [optional] 
**error_message** | **List[object]** | **array** of error message strings | [optional] 
**error_message_text** | **str** | **array** of error message strings in plain text | [optional] 
**error_name** | **str** | **name** of *this* type of error | [optional] 
**error_reference** | **str** | **reference number** of *this* error | [optional] 
**error_type** | **str** | **code** specifying the type of error | [optional] 
**extra_info** | **object** | ignore (Viator only) | [optional] 
**extra_object** | **object** | ignore (Viator only) | [optional] 
**success** | **bool** | **boolean indicator** of *this* request&#39;s outcome - &#x60;true&#x60;: the request was successful with no errors - &#x60;false&#x60;: an error was encountered  | [optional] 
**total_count** | **int** | **number** of results available for *this* service  | [optional] 
**vmid** | **str** | **unique numeric id** of the server that processed *this* request | [optional] 
**data** | [**MerchantCancellation400ResponseAllOfData**](MerchantCancellation400ResponseAllOfData.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchant_cancellation400_response import MerchantCancellation400Response

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantCancellation400Response from a JSON string
merchant_cancellation400_response_instance = MerchantCancellation400Response.from_json(json)
# print the JSON string representation of the object
print(MerchantCancellation400Response.to_json())

# convert the object into a dict
merchant_cancellation400_response_dict = merchant_cancellation400_response_instance.to_dict()
# create an instance of MerchantCancellation400Response from a dict
merchant_cancellation400_response_from_dict = MerchantCancellation400Response.from_dict(merchant_cancellation400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


