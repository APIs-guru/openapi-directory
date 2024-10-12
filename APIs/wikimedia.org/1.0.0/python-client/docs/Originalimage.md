# Originalimage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Original image height | 
**source** | **str** | Original image URI | 
**width** | **int** | Original image width | 

## Example

```python
from openapi_client.models.originalimage import Originalimage

# TODO update the JSON string below
json = "{}"
# create an instance of Originalimage from a JSON string
originalimage_instance = Originalimage.from_json(json)
# print the JSON string representation of the object
print(Originalimage.to_json())

# convert the object into a dict
originalimage_dict = originalimage_instance.to_dict()
# create an instance of Originalimage from a dict
originalimage_from_dict = Originalimage.from_dict(originalimage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


