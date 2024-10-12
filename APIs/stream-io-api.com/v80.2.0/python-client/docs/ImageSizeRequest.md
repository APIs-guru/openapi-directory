# ImageSizeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crop** | **str** | Crop mode | [optional] 
**height** | **int** | Target image height | [optional] 
**resize** | **str** | Resize method | [optional] 
**width** | **int** | Target image width | [optional] 

## Example

```python
from openapi_client.models.image_size_request import ImageSizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSizeRequest from a JSON string
image_size_request_instance = ImageSizeRequest.from_json(json)
# print the JSON string representation of the object
print(ImageSizeRequest.to_json())

# convert the object into a dict
image_size_request_dict = image_size_request_instance.to_dict()
# create an instance of ImageSizeRequest from a dict
image_size_request_from_dict = ImageSizeRequest.from_dict(image_size_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


