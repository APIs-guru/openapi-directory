# GoogleCloudRetailV2alphaPromotion

Promotion specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promotion_id** | **str** | Promotion identifier, which is the final component of name. For example, this field is \&quot;free_gift\&quot;, if name is &#x60;projects/*/locations/global/catalogs/default_catalog/promotions/free_gift&#x60;. The value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: &#x60;a-zA-Z*&#x60;. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Corresponds to Google Merchant Center property [promotion_id](https://support.google.com/merchants/answer/7050148). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_promotion import GoogleCloudRetailV2alphaPromotion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaPromotion from a JSON string
google_cloud_retail_v2alpha_promotion_instance = GoogleCloudRetailV2alphaPromotion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaPromotion.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_promotion_dict = google_cloud_retail_v2alpha_promotion_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaPromotion from a dict
google_cloud_retail_v2alpha_promotion_from_dict = GoogleCloudRetailV2alphaPromotion.from_dict(google_cloud_retail_v2alpha_promotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


