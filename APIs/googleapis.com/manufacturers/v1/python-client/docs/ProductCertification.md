# ProductCertification

Product certification data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | Required. This is the product&#39;s brand name. The brand is used to help identify your product. | [optional] 
**certification** | [**List[Certification]**](Certification.md) | Required. A list of certifications to link to the described product. | [optional] 
**country_code** | **List[str]** | Optional. A 2-letter country code (ISO 3166-1 Alpha 2). | [optional] 
**destination_statuses** | [**List[DestinationStatus]**](DestinationStatus.md) | Output only. The statuses of the destinations. | [optional] [readonly] 
**issues** | [**List[Issue]**](Issue.md) | Output only. A server-generated list of issues associated with the product. | [optional] [readonly] 
**mpn** | **List[str]** | Optional. These are the Manufacturer Part Numbers (MPN). MPNs are used to uniquely identify a specific product among all products from the same manufacturer | [optional] 
**name** | **str** | Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where &#x60;id&#x60; is a some unique identifier and &#x60;language_code&#x60; is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637. | [optional] 
**product_code** | **List[str]** | Optional. Another name for GTIN. | [optional] 
**product_type** | **List[str]** | Optional. These are your own product categorization system in your product data. | [optional] 
**title** | **str** | Required. This is to clearly identify the product you are certifying. | [optional] 

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


