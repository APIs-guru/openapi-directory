# OBWriteFundsConfirmationResponse1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBWriteFundsConfirmationResponse1Data**](OBWriteFundsConfirmationResponse1Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_funds_confirmation_response1 import OBWriteFundsConfirmationResponse1

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteFundsConfirmationResponse1 from a JSON string
ob_write_funds_confirmation_response1_instance = OBWriteFundsConfirmationResponse1.from_json(json)
# print the JSON string representation of the object
print(OBWriteFundsConfirmationResponse1.to_json())

# convert the object into a dict
ob_write_funds_confirmation_response1_dict = ob_write_funds_confirmation_response1_instance.to_dict()
# create an instance of OBWriteFundsConfirmationResponse1 from a dict
ob_write_funds_confirmation_response1_from_dict = OBWriteFundsConfirmationResponse1.from_dict(ob_write_funds_confirmation_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


