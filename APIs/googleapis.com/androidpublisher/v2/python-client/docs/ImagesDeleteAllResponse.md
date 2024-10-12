# ImagesDeleteAllResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | [**List[Image]**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.images_delete_all_response import ImagesDeleteAllResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImagesDeleteAllResponse from a JSON string
images_delete_all_response_instance = ImagesDeleteAllResponse.from_json(json)
# print the JSON string representation of the object
print(ImagesDeleteAllResponse.to_json())

# convert the object into a dict
images_delete_all_response_dict = images_delete_all_response_instance.to_dict()
# create an instance of ImagesDeleteAllResponse from a dict
images_delete_all_response_from_dict = ImagesDeleteAllResponse.from_dict(images_delete_all_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


