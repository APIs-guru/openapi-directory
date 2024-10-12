# UserEntitiesUrl

Expanded details for the URL specified in the User's profile, with start and end indices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urls** | [**List[UrlEntity]**](UrlEntity.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_entities_url import UserEntitiesUrl

# TODO update the JSON string below
json = "{}"
# create an instance of UserEntitiesUrl from a JSON string
user_entities_url_instance = UserEntitiesUrl.from_json(json)
# print the JSON string representation of the object
print(UserEntitiesUrl.to_json())

# convert the object into a dict
user_entities_url_dict = user_entities_url_instance.to_dict()
# create an instance of UserEntitiesUrl from a dict
user_entities_url_from_dict = UserEntitiesUrl.from_dict(user_entities_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


