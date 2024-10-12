# OBRisk1

The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_address** | [**OBRisk1DeliveryAddress**](OBRisk1DeliveryAddress.md) |  | [optional] 
**merchant_category_code** | **str** | Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction. | [optional] 
**merchant_customer_identification** | **str** | The unique customer identifier of the PSU with the merchant. | [optional] 
**payment_context_code** | **str** | Specifies the payment context | [optional] 

## Example

```python
from openapi_client.models.ob_risk1 import OBRisk1

# TODO update the JSON string below
json = "{}"
# create an instance of OBRisk1 from a JSON string
ob_risk1_instance = OBRisk1.from_json(json)
# print the JSON string representation of the object
print(OBRisk1.to_json())

# convert the object into a dict
ob_risk1_dict = ob_risk1_instance.to_dict()
# create an instance of OBRisk1 from a dict
ob_risk1_from_dict = OBRisk1.from_dict(ob_risk1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


