# AddFundsToCarrierResponseBody

The current balance of the requested carrier account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | [**MonetaryValue**](MonetaryValue.md) | The current balance of the account | [readonly] 

## Example

```python
from openapi_client.models.add_funds_to_carrier_response_body import AddFundsToCarrierResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of AddFundsToCarrierResponseBody from a JSON string
add_funds_to_carrier_response_body_instance = AddFundsToCarrierResponseBody.from_json(json)
# print the JSON string representation of the object
print(AddFundsToCarrierResponseBody.to_json())

# convert the object into a dict
add_funds_to_carrier_response_body_dict = add_funds_to_carrier_response_body_instance.to_dict()
# create an instance of AddFundsToCarrierResponseBody from a dict
add_funds_to_carrier_response_body_from_dict = AddFundsToCarrierResponseBody.from_dict(add_funds_to_carrier_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


