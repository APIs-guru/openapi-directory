# OBFundsConfirmationResponse1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBFundsConfirmationResponse1Data**](OBFundsConfirmationResponse1Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_funds_confirmation_response1 import OBFundsConfirmationResponse1

# TODO update the JSON string below
json = "{}"
# create an instance of OBFundsConfirmationResponse1 from a JSON string
ob_funds_confirmation_response1_instance = OBFundsConfirmationResponse1.from_json(json)
# print the JSON string representation of the object
print(OBFundsConfirmationResponse1.to_json())

# convert the object into a dict
ob_funds_confirmation_response1_dict = ob_funds_confirmation_response1_instance.to_dict()
# create an instance of OBFundsConfirmationResponse1 from a dict
ob_funds_confirmation_response1_from_dict = OBFundsConfirmationResponse1.from_dict(ob_funds_confirmation_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


