# ProductCertification

Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certification_authority** | **str** | The certification authority, for example \&quot;European_Commission\&quot;. Maximum length is 2000 characters. | [optional] 
**certification_code** | **str** | The certification code, for eaxample \&quot;123456\&quot;. Maximum length is 2000 characters. | [optional] 
**certification_name** | **str** | The name of the certification, for example \&quot;EPREL\&quot;. Maximum length is 2000 characters. | [optional] 

## Example

```python
from openapi_client.models.product_certification import ProductCertification

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCertification from a JSON string
product_certification_instance = ProductCertification.from_json(json)
# print the JSON string representation of the object
print(ProductCertification.to_json())

# convert the object into a dict
product_certification_dict = product_certification_instance.to_dict()
# create an instance of ProductCertification from a dict
product_certification_from_dict = ProductCertification.from_dict(product_certification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


