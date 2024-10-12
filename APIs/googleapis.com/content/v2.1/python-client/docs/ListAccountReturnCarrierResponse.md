# ListAccountReturnCarrierResponse

Response for listing account return carriers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_return_carriers** | [**List[AccountReturnCarrier]**](AccountReturnCarrier.md) | List of all available account return carriers for the merchant. | [optional] 

## Example

```python
from openapi_client.models.list_account_return_carrier_response import ListAccountReturnCarrierResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountReturnCarrierResponse from a JSON string
list_account_return_carrier_response_instance = ListAccountReturnCarrierResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccountReturnCarrierResponse.to_json())

# convert the object into a dict
list_account_return_carrier_response_dict = list_account_return_carrier_response_instance.to_dict()
# create an instance of ListAccountReturnCarrierResponse from a dict
list_account_return_carrier_response_from_dict = ListAccountReturnCarrierResponse.from_dict(list_account_return_carrier_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


