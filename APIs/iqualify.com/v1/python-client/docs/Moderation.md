# Moderation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_muted** | **bool** |  | [optional] 
**moderator** | [**Moderator**](Moderator.md) |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.moderation import Moderation

# TODO update the JSON string below
json = "{}"
# create an instance of Moderation from a JSON string
moderation_instance = Moderation.from_json(json)
# print the JSON string representation of the object
print(Moderation.to_json())

# convert the object into a dict
moderation_dict = moderation_instance.to_dict()
# create an instance of Moderation from a dict
moderation_from_dict = Moderation.from_dict(moderation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


