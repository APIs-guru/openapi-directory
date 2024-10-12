# KnownUser

A known user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_current_user** | **bool** | True if this is the user making the request. | [optional] 
**person_name** | **str** | The identifier for this user that can be used with the People API to get more information. The format is &#x60;people/ACCOUNT_ID&#x60;. See https://developers.google.com/people/. | [optional] 

## Example

```python
from openapi_client.models.known_user import KnownUser

# TODO update the JSON string below
json = "{}"
# create an instance of KnownUser from a JSON string
known_user_instance = KnownUser.from_json(json)
# print the JSON string representation of the object
print(KnownUser.to_json())

# convert the object into a dict
known_user_dict = known_user_instance.to_dict()
# create an instance of KnownUser from a dict
known_user_from_dict = KnownUser.from_dict(known_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


