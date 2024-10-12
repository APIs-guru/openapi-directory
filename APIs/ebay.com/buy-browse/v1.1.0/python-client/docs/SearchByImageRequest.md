# SearchByImageRequest

The type that defines the fields for the image information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | The Base64 string of the image. | [optional] 

## Example

```python
from openapi_client.models.search_by_image_request import SearchByImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchByImageRequest from a JSON string
search_by_image_request_instance = SearchByImageRequest.from_json(json)
# print the JSON string representation of the object
print(SearchByImageRequest.to_json())

# convert the object into a dict
search_by_image_request_dict = search_by_image_request_instance.to_dict()
# create an instance of SearchByImageRequest from a dict
search_by_image_request_from_dict = SearchByImageRequest.from_dict(search_by_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


