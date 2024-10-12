# OBSCASupportData1

Supporting Data provided by TPP, when requesting SCA Exemption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_authentication_approach** | **str** | Specifies a character string with a maximum length of 40 characters. Usage: This field indicates whether the PSU was subject to SCA performed by the TPP | [optional] 
**reference_payment_order_id** | **str** | If the payment is recurring, then this field is populated with the transaction identifier of the previous payment occurrence so that the ASPSP can verify that the PISP, amount and the payee are the same as the previous occurrence. The value here refers to the payment id e.g. DomesticPaymentId   | [optional] 
**requested_sca_exemption_type** | **str** | This field allows a PISP to request specific SCA Exemption for a Payment Initiation | [optional] 

## Example

```python
from openapi_client.models.obsca_support_data1 import OBSCASupportData1

# TODO update the JSON string below
json = "{}"
# create an instance of OBSCASupportData1 from a JSON string
obsca_support_data1_instance = OBSCASupportData1.from_json(json)
# print the JSON string representation of the object
print(OBSCASupportData1.to_json())

# convert the object into a dict
obsca_support_data1_dict = obsca_support_data1_instance.to_dict()
# create an instance of OBSCASupportData1 from a dict
obsca_support_data1_from_dict = OBSCASupportData1.from_dict(obsca_support_data1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


