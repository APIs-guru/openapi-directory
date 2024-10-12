# StretchedPictureFill

The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_url** | **str** | Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation&#39;s sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 

## Example

```python
from openapi_client.models.stretched_picture_fill import StretchedPictureFill

# TODO update the JSON string below
json = "{}"
# create an instance of StretchedPictureFill from a JSON string
stretched_picture_fill_instance = StretchedPictureFill.from_json(json)
# print the JSON string representation of the object
print(StretchedPictureFill.to_json())

# convert the object into a dict
stretched_picture_fill_dict = stretched_picture_fill_instance.to_dict()
# create an instance of StretchedPictureFill from a dict
stretched_picture_fill_from_dict = StretchedPictureFill.from_dict(stretched_picture_fill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


