# GoogleCloudRetailV2ColorInfo

The color information of a Product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_families** | **List[str]** | The standard color families. Strongly recommended to use the following standard color groups: \&quot;Red\&quot;, \&quot;Pink\&quot;, \&quot;Orange\&quot;, \&quot;Yellow\&quot;, \&quot;Purple\&quot;, \&quot;Green\&quot;, \&quot;Cyan\&quot;, \&quot;Blue\&quot;, \&quot;Brown\&quot;, \&quot;White\&quot;, \&quot;Gray\&quot;, \&quot;Black\&quot; and \&quot;Mixed\&quot;. Normally it is expected to have only 1 color family. May consider using single \&quot;Mixed\&quot; instead of multiple values. A maximum of 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color). | [optional] 
**colors** | **List[str]** | The color display names, which may be different from standard color family names, such as the color aliases used in the website frontend. Normally it is expected to have only 1 color. May consider using single \&quot;Mixed\&quot; instead of multiple values. A maximum of 75 colors are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_color_info import GoogleCloudRetailV2ColorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ColorInfo from a JSON string
google_cloud_retail_v2_color_info_instance = GoogleCloudRetailV2ColorInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ColorInfo.to_json())

# convert the object into a dict
google_cloud_retail_v2_color_info_dict = google_cloud_retail_v2_color_info_instance.to_dict()
# create an instance of GoogleCloudRetailV2ColorInfo from a dict
google_cloud_retail_v2_color_info_from_dict = GoogleCloudRetailV2ColorInfo.from_dict(google_cloud_retail_v2_color_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


