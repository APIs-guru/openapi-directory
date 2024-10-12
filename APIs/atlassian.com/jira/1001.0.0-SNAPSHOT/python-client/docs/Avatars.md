# Avatars

Details about system and custom avatars.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom** | [**List[Avatar]**](Avatar.md) | Custom avatars list. | [optional] [readonly] 
**system** | [**List[Avatar]**](Avatar.md) | System avatars list. | [optional] [readonly] 

## Example

```python
from openapi_client.models.avatars import Avatars

# TODO update the JSON string below
json = "{}"
# create an instance of Avatars from a JSON string
avatars_instance = Avatars.from_json(json)
# print the JSON string representation of the object
print(Avatars.to_json())

# convert the object into a dict
avatars_dict = avatars_instance.to_dict()
# create an instance of Avatars from a dict
avatars_from_dict = Avatars.from_dict(avatars_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


