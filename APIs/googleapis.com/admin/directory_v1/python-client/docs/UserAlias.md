# UserAlias

The Directory API manages aliases, which are alternative email addresses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The alias email address. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | The unique ID for the user. | [optional] 
**kind** | **str** | The type of the API resource. For Alias resources, the value is &#x60;admin#directory#alias&#x60;. | [optional] 
**primary_email** | **str** | The user&#39;s primary email address. | [optional] 

## Example

```python
from openapi_client.models.user_alias import UserAlias

# TODO update the JSON string below
json = "{}"
# create an instance of UserAlias from a JSON string
user_alias_instance = UserAlias.from_json(json)
# print the JSON string representation of the object
print(UserAlias.to_json())

# convert the object into a dict
user_alias_dict = user_alias_instance.to_dict()
# create an instance of UserAlias from a dict
user_alias_from_dict = UserAlias.from_dict(user_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


