# ImagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_height** | [**ImageDataRequest**](ImageDataRequest.md) |  | [optional] 
**fixed_height_downsampled** | [**ImageDataRequest**](ImageDataRequest.md) |  | [optional] 
**fixed_height_still** | [**ImageDataRequest**](ImageDataRequest.md) |  | [optional] 
**fixed_width** | [**ImageDataRequest**](ImageDataRequest.md) |  | [optional] 
**fixed_width_downsampled** | [**ImageDataRequest**](ImageDataRequest.md) |  | [optional] 
**fixed_width_still** | [**ImageDataRequest**](ImageDataRequest.md) |  | [optional] 
**original** | [**ImageDataRequest**](ImageDataRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.images_request import ImagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImagesRequest from a JSON string
images_request_instance = ImagesRequest.from_json(json)
# print the JSON string representation of the object
print(ImagesRequest.to_json())

# convert the object into a dict
images_request_dict = images_request_instance.to_dict()
# create an instance of ImagesRequest from a dict
images_request_from_dict = ImagesRequest.from_dict(images_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


