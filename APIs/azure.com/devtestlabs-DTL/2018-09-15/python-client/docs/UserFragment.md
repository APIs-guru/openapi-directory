# UserFragment

Profile of a lab user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UserPropertiesFragment**](UserPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.user_fragment import UserFragment

# TODO update the JSON string below
json = "{}"
# create an instance of UserFragment from a JSON string
user_fragment_instance = UserFragment.from_json(json)
# print the JSON string representation of the object
print(UserFragment.to_json())

# convert the object into a dict
user_fragment_dict = user_fragment_instance.to_dict()
# create an instance of UserFragment from a dict
user_fragment_from_dict = UserFragment.from_dict(user_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


