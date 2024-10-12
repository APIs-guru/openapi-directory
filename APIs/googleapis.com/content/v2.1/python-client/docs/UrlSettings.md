# UrlSettings

Specifications related to the `Checkout` URL. The `UriTemplate` is of the form `https://www.mystore.com/checkout?item_id={id}` where `{id}` will be automatically replaced with data from the merchant account with this attribute [offer_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.offer_id)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_uri_template** | **str** | URL template when the placeholders are expanded will redirect the buyer to the cart page on the merchant website with the selected item in cart. | [optional] 
**checkout_uri_template** | **str** | URL template when the placeholders are expanded will redirect the buyer to the merchant checkout page with the item in the cart. | [optional] 

## Example

```python
from openapi_client.models.url_settings import UrlSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UrlSettings from a JSON string
url_settings_instance = UrlSettings.from_json(json)
# print the JSON string representation of the object
print(UrlSettings.to_json())

# convert the object into a dict
url_settings_dict = url_settings_instance.to_dict()
# create an instance of UrlSettings from a dict
url_settings_from_dict = UrlSettings.from_dict(url_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


