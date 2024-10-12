# CreateImageRequest

Creates an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_properties** | [**PageElementProperties**](PageElementProperties.md) |  | [optional] 
**object_id** | **str** | A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The length of the ID must not be less than 5 or greater than 50. If you don&#39;t specify an ID, a unique one is generated. | [optional] 
**url** | **str** | The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50 MB in size, can&#39;t exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF formats. The provided URL must be publicly accessible and up to 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field. | [optional] 

## Example

```python
from openapi_client.models.create_image_request import CreateImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateImageRequest from a JSON string
create_image_request_instance = CreateImageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateImageRequest.to_json())

# convert the object into a dict
create_image_request_dict = create_image_request_instance.to_dict()
# create an instance of CreateImageRequest from a dict
create_image_request_from_dict = CreateImageRequest.from_dict(create_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


