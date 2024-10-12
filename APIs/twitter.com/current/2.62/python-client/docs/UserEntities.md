# UserEntities

A list of metadata found in the User's profile description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**FullTextEntities**](FullTextEntities.md) |  | [optional] 
**url** | [**UserEntitiesUrl**](UserEntitiesUrl.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_entities import UserEntities

# TODO update the JSON string below
json = "{}"
# create an instance of UserEntities from a JSON string
user_entities_instance = UserEntities.from_json(json)
# print the JSON string representation of the object
print(UserEntities.to_json())

# convert the object into a dict
user_entities_dict = user_entities_instance.to_dict()
# create an instance of UserEntities from a dict
user_entities_from_dict = UserEntities.from_dict(user_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


