# Bullet

Describes the bullet of a paragraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id** | **str** | The ID of the list this paragraph belongs to. | [optional] 
**nesting_level** | **int** | The nesting level of this paragraph in the list. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.bullet import Bullet

# TODO update the JSON string below
json = "{}"
# create an instance of Bullet from a JSON string
bullet_instance = Bullet.from_json(json)
# print the JSON string representation of the object
print(Bullet.to_json())

# convert the object into a dict
bullet_dict = bullet_instance.to_dict()
# create an instance of Bullet from a dict
bullet_from_dict = Bullet.from_dict(bullet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


