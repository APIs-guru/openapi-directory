# UserIdentitiesList200Response

List of Users Identity list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[UserIdentitiesList200ResponseValueInner]**](UserIdentitiesList200ResponseValueInner.md) | User Identity values. | [optional] 

## Example

```python
from openapi_client.models.user_identities_list200_response import UserIdentitiesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentitiesList200Response from a JSON string
user_identities_list200_response_instance = UserIdentitiesList200Response.from_json(json)
# print the JSON string representation of the object
print(UserIdentitiesList200Response.to_json())

# convert the object into a dict
user_identities_list200_response_dict = user_identities_list200_response_instance.to_dict()
# create an instance of UserIdentitiesList200Response from a dict
user_identities_list200_response_from_dict = UserIdentitiesList200Response.from_dict(user_identities_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


