# GoogleCloudRetailV2Image

Product image. Recommendations AI and Retail Search do not use product images to improve prediction and search results. However, product images can be returned in results, and are shown in prediction or search previews in the console.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Height of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**uri** | **str** | Required. URI of the image. This field must be a valid UTF-8 encoded URI with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image). | [optional] 
**width** | **int** | Width of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_image import GoogleCloudRetailV2Image

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2Image from a JSON string
google_cloud_retail_v2_image_instance = GoogleCloudRetailV2Image.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2Image.to_json())

# convert the object into a dict
google_cloud_retail_v2_image_dict = google_cloud_retail_v2_image_instance.to_dict()
# create an instance of GoogleCloudRetailV2Image from a dict
google_cloud_retail_v2_image_from_dict = GoogleCloudRetailV2Image.from_dict(google_cloud_retail_v2_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


