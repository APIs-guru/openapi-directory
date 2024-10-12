# SkinData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**texture** | [**TextureInfo**](TextureInfo.md) |  | [optional] 
**uuid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.skin_data import SkinData

# TODO update the JSON string below
json = "{}"
# create an instance of SkinData from a JSON string
skin_data_instance = SkinData.from_json(json)
# print the JSON string representation of the object
print(SkinData.to_json())

# convert the object into a dict
skin_data_dict = skin_data_instance.to_dict()
# create an instance of SkinData from a dict
skin_data_from_dict = SkinData.from_dict(skin_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


