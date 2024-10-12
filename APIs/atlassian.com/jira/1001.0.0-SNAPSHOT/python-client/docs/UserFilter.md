# UserFilter

Filter for a User Picker (single) custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the filter is enabled. | 
**groups** | **List[str]** | User groups autocomplete suggestion users must belong to. If not provided, the default values are used. A maximum of 10 groups can be provided. | [optional] 
**role_ids** | **List[int]** | Roles that autocomplete suggestion users must belong to. If not provided, the default values are used. A maximum of 10 roles can be provided. | [optional] 

## Example

```python
from openapi_client.models.user_filter import UserFilter

# TODO update the JSON string below
json = "{}"
# create an instance of UserFilter from a JSON string
user_filter_instance = UserFilter.from_json(json)
# print the JSON string representation of the object
print(UserFilter.to_json())

# convert the object into a dict
user_filter_dict = user_filter_instance.to_dict()
# create an instance of UserFilter from a dict
user_filter_from_dict = UserFilter.from_dict(user_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


