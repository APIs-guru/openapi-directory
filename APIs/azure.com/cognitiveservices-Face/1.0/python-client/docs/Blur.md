# Blur

Properties describing any presence of blur within the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blur_level** | **str** | An enum value indicating level of blurriness. | [optional] 
**value** | **float** | A number ranging from 0 to 1 indicating the intensity level associated with a property. | [optional] 

## Example

```python
from openapi_client.models.blur import Blur

# TODO update the JSON string below
json = "{}"
# create an instance of Blur from a JSON string
blur_instance = Blur.from_json(json)
# print the JSON string representation of the object
print(Blur.to_json())

# convert the object into a dict
blur_dict = blur_instance.to_dict()
# create an instance of Blur from a dict
blur_from_dict = Blur.from_dict(blur_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


