# ColorDto

Set color

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**b** | **int** | Get or sets B value of RGB color | [optional] 
**g** | **int** | Get or sets G value of RGB color | [optional] 
**r** | **int** | Get or sets R value of RGB color | [optional] 

## Example

```python
from openapi_client.models.color_dto import ColorDto

# TODO update the JSON string below
json = "{}"
# create an instance of ColorDto from a JSON string
color_dto_instance = ColorDto.from_json(json)
# print the JSON string representation of the object
print(ColorDto.to_json())

# convert the object into a dict
color_dto_dict = color_dto_instance.to_dict()
# create an instance of ColorDto from a dict
color_dto_from_dict = ColorDto.from_dict(color_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


