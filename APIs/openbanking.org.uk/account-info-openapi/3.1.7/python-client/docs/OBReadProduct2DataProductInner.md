# OBReadProduct2DataProductInner

Product details associated with the Account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**bca** | [**OBBCAData1**](OBBCAData1.md) |  | [optional] 
**marketing_state_id** | **str** | Unique and unambiguous identification of a  Product Marketing State. | [optional] 
**other_product_type** | [**OBReadProduct2DataProductInnerOtherProductType**](OBReadProduct2DataProductInnerOtherProductType.md) |  | [optional] 
**pca** | [**OBPCAData1**](OBPCAData1.md) |  | [optional] 
**product_id** | **str** | The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers. | [optional] 
**product_name** | **str** | The name of the Product used for marketing purposes from a customer perspective. I.e. what the customer would recognise. | [optional] 
**product_type** | **str** | Product type : Personal Current Account, Business Current Account | 
**secondary_product_id** | **str** | Any secondary Identification which  supports Product Identifier to uniquely identify the current account banking products. | [optional] 

## Example

```python
from openapi_client.models.ob_read_product2_data_product_inner import OBReadProduct2DataProductInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadProduct2DataProductInner from a JSON string
ob_read_product2_data_product_inner_instance = OBReadProduct2DataProductInner.from_json(json)
# print the JSON string representation of the object
print(OBReadProduct2DataProductInner.to_json())

# convert the object into a dict
ob_read_product2_data_product_inner_dict = ob_read_product2_data_product_inner_instance.to_dict()
# create an instance of OBReadProduct2DataProductInner from a dict
ob_read_product2_data_product_inner_from_dict = OBReadProduct2DataProductInner.from_dict(ob_read_product2_data_product_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


