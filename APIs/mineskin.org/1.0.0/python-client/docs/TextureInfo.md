# TextureInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.texture_info import TextureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of TextureInfo from a JSON string
texture_info_instance = TextureInfo.from_json(json)
# print the JSON string representation of the object
print(TextureInfo.to_json())

# convert the object into a dict
texture_info_dict = texture_info_instance.to_dict()
# create an instance of TextureInfo from a dict
texture_info_from_dict = TextureInfo.from_dict(texture_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


