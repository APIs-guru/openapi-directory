# SuggestedBullet

A suggested change to a Bullet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bullet** | [**Bullet**](Bullet.md) |  | [optional] 
**bullet_suggestion_state** | [**BulletSuggestionState**](BulletSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_bullet import SuggestedBullet

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedBullet from a JSON string
suggested_bullet_instance = SuggestedBullet.from_json(json)
# print the JSON string representation of the object
print(SuggestedBullet.to_json())

# convert the object into a dict
suggested_bullet_dict = suggested_bullet_instance.to_dict()
# create an instance of SuggestedBullet from a dict
suggested_bullet_from_dict = SuggestedBullet.from_dict(suggested_bullet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


