# GoogleShoppingManufacturersV1ProductCertification

Description of a certification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **str** | Required. Name of the certification body. | [optional] 
**code** | **str** | Required. A unique code to identify the certification. | [optional] 
**name** | **str** | Required. Name of the certification. | [optional] 

## Example

```python
from openapi_client.models.google_shopping_manufacturers_v1_product_certification import GoogleShoppingManufacturersV1ProductCertification

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleShoppingManufacturersV1ProductCertification from a JSON string
google_shopping_manufacturers_v1_product_certification_instance = GoogleShoppingManufacturersV1ProductCertification.from_json(json)
# print the JSON string representation of the object
print(GoogleShoppingManufacturersV1ProductCertification.to_json())

# convert the object into a dict
google_shopping_manufacturers_v1_product_certification_dict = google_shopping_manufacturers_v1_product_certification_instance.to_dict()
# create an instance of GoogleShoppingManufacturersV1ProductCertification from a dict
google_shopping_manufacturers_v1_product_certification_from_dict = GoogleShoppingManufacturersV1ProductCertification.from_dict(google_shopping_manufacturers_v1_product_certification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


