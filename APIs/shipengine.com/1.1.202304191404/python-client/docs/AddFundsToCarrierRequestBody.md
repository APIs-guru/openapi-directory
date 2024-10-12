# AddFundsToCarrierRequestBody

An add funds to carrier request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The monetary amount, in the specified currency. | 
**currency** | **str** | The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html  | 

## Example

```python
from openapi_client.models.add_funds_to_carrier_request_body import AddFundsToCarrierRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddFundsToCarrierRequestBody from a JSON string
add_funds_to_carrier_request_body_instance = AddFundsToCarrierRequestBody.from_json(json)
# print the JSON string representation of the object
print(AddFundsToCarrierRequestBody.to_json())

# convert the object into a dict
add_funds_to_carrier_request_body_dict = add_funds_to_carrier_request_body_instance.to_dict()
# create an instance of AddFundsToCarrierRequestBody from a dict
add_funds_to_carrier_request_body_from_dict = AddFundsToCarrierRequestBody.from_dict(add_funds_to_carrier_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


