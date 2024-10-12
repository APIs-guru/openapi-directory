# ImageDataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames** | **str** |  | [optional] 
**height** | **str** |  | [optional] 
**size** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**width** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.image_data_request import ImageDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImageDataRequest from a JSON string
image_data_request_instance = ImageDataRequest.from_json(json)
# print the JSON string representation of the object
print(ImageDataRequest.to_json())

# convert the object into a dict
image_data_request_dict = image_data_request_instance.to_dict()
# create an instance of ImageDataRequest from a dict
image_data_request_from_dict = ImageDataRequest.from_dict(image_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


