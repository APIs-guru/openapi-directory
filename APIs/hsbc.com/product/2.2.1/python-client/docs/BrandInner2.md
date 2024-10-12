# BrandInner2

Brand registered by the banking group at https://register.fca.org.uk/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** | Brand Name that an organisation uses to market its products or services to a consumer as registered at https://register.fca.org.uk/ | 
**pca** | [**List[PCAInner]**](PCAInner.md) | PCA&#39; means a personal current account. That is an account marketed to individuals rather than businesses, which provides the facility to place funds, withdraw cash, hold deposits and to execute payment transaction to and from third parties but does not include any of the following types of accounts:  (a) an account in which money is held on deposit in a currency other than sterling;  (b) current account mortgage, ie a single account comprising both a personal current account and a mortgage, which is regulated and marketed principally as a mortgage;   (c) savings accounts (including instant access savings accounts);   (d) credit card accounts where funds are usually paid in for the sole purpose of repaying a credit card debt; and  (e) e-money accounts. | 

## Example

```python
from openapi_client.models.brand_inner2 import BrandInner2

# TODO update the JSON string below
json = "{}"
# create an instance of BrandInner2 from a JSON string
brand_inner2_instance = BrandInner2.from_json(json)
# print the JSON string representation of the object
print(BrandInner2.to_json())

# convert the object into a dict
brand_inner2_dict = brand_inner2_instance.to_dict()
# create an instance of BrandInner2 from a dict
brand_inner2_from_dict = BrandInner2.from_dict(brand_inner2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


