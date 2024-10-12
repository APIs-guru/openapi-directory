# OBMerchantDetails1

Details of the merchant involved in the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_category_code** | **str** | Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction. | [optional] 
**merchant_name** | **str** | Name by which the merchant is known. | [optional] 

## Example

```python
from openapi_client.models.ob_merchant_details1 import OBMerchantDetails1

# TODO update the JSON string below
json = "{}"
# create an instance of OBMerchantDetails1 from a JSON string
ob_merchant_details1_instance = OBMerchantDetails1.from_json(json)
# print the JSON string representation of the object
print(OBMerchantDetails1.to_json())

# convert the object into a dict
ob_merchant_details1_dict = ob_merchant_details1_instance.to_dict()
# create an instance of OBMerchantDetails1 from a dict
ob_merchant_details1_from_dict = OBMerchantDetails1.from_dict(ob_merchant_details1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


