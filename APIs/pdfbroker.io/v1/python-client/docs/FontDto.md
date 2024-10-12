# FontDto

The Font dto object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets the name of the font | [optional] 
**size** | **float** | Gets the size of the font | [optional] 
**style** | [**FontStyle**](FontStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.font_dto import FontDto

# TODO update the JSON string below
json = "{}"
# create an instance of FontDto from a JSON string
font_dto_instance = FontDto.from_json(json)
# print the JSON string representation of the object
print(FontDto.to_json())

# convert the object into a dict
font_dto_dict = font_dto_instance.to_dict()
# create an instance of FontDto from a dict
font_dto_from_dict = FontDto.from_dict(font_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


