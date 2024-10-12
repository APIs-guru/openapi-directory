# ImagesListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | [**List[Image]**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.images_list_response import ImagesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImagesListResponse from a JSON string
images_list_response_instance = ImagesListResponse.from_json(json)
# print the JSON string representation of the object
print(ImagesListResponse.to_json())

# convert the object into a dict
images_list_response_dict = images_list_response_instance.to_dict()
# create an instance of ImagesListResponse from a dict
images_list_response_from_dict = ImagesListResponse.from_dict(images_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


