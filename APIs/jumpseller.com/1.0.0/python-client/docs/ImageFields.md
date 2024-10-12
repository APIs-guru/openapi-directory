# ImageFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Unique identifier of the image | [optional] 
**position** | **int** | Position of the image | [optional] 
**url** | **str** | Complete URL of the image | [optional] 

## Example

```python
from openapi_client.models.image_fields import ImageFields

# TODO update the JSON string below
json = "{}"
# create an instance of ImageFields from a JSON string
image_fields_instance = ImageFields.from_json(json)
# print the JSON string representation of the object
print(ImageFields.to_json())

# convert the object into a dict
image_fields_dict = image_fields_instance.to_dict()
# create an instance of ImageFields from a dict
image_fields_from_dict = ImageFields.from_dict(image_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


