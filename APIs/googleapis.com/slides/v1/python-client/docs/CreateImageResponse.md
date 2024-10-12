# CreateImageResponse

The result of creating an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the created image. | [optional] 

## Example

```python
from openapi_client.models.create_image_response import CreateImageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateImageResponse from a JSON string
create_image_response_instance = CreateImageResponse.from_json(json)
# print the JSON string representation of the object
print(CreateImageResponse.to_json())

# convert the object into a dict
create_image_response_dict = create_image_response_instance.to_dict()
# create an instance of CreateImageResponse from a dict
create_image_response_from_dict = CreateImageResponse.from_dict(create_image_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


