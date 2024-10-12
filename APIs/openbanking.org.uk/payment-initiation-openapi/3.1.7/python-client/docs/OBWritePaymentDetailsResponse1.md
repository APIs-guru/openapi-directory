# OBWritePaymentDetailsResponse1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBWritePaymentDetailsResponse1Data**](OBWritePaymentDetailsResponse1Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_payment_details_response1 import OBWritePaymentDetailsResponse1

# TODO update the JSON string below
json = "{}"
# create an instance of OBWritePaymentDetailsResponse1 from a JSON string
ob_write_payment_details_response1_instance = OBWritePaymentDetailsResponse1.from_json(json)
# print the JSON string representation of the object
print(OBWritePaymentDetailsResponse1.to_json())

# convert the object into a dict
ob_write_payment_details_response1_dict = ob_write_payment_details_response1_instance.to_dict()
# create an instance of OBWritePaymentDetailsResponse1 from a dict
ob_write_payment_details_response1_from_dict = OBWritePaymentDetailsResponse1.from_dict(ob_write_payment_details_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


