# ListOSImagesResponse

Request for getting all available OS images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**os_images** | [**List[OSImage]**](OSImage.md) | The OS images available. | [optional] 

## Example

```python
from openapi_client.models.list_os_images_response import ListOSImagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOSImagesResponse from a JSON string
list_os_images_response_instance = ListOSImagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListOSImagesResponse.to_json())

# convert the object into a dict
list_os_images_response_dict = list_os_images_response_instance.to_dict()
# create an instance of ListOSImagesResponse from a dict
list_os_images_response_from_dict = ListOSImagesResponse.from_dict(list_os_images_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


