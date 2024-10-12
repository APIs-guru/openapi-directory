# OBWriteFundsConfirmationResponse1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**funds_available_result** | [**OBWriteFundsConfirmationResponse1DataFundsAvailableResult**](OBWriteFundsConfirmationResponse1DataFundsAvailableResult.md) |  | [optional] 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 

## Example

```python
from openapi_client.models.ob_write_funds_confirmation_response1_data import OBWriteFundsConfirmationResponse1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteFundsConfirmationResponse1Data from a JSON string
ob_write_funds_confirmation_response1_data_instance = OBWriteFundsConfirmationResponse1Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteFundsConfirmationResponse1Data.to_json())

# convert the object into a dict
ob_write_funds_confirmation_response1_data_dict = ob_write_funds_confirmation_response1_data_instance.to_dict()
# create an instance of OBWriteFundsConfirmationResponse1Data from a dict
ob_write_funds_confirmation_response1_data_from_dict = OBWriteFundsConfirmationResponse1Data.from_dict(ob_write_funds_confirmation_response1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


