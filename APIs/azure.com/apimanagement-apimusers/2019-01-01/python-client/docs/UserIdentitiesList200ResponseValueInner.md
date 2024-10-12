# UserIdentitiesList200ResponseValueInner

User identity details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier value within provider. | [optional] 
**provider** | **str** | Identity provider name. | [optional] 

## Example

```python
from openapi_client.models.user_identities_list200_response_value_inner import UserIdentitiesList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentitiesList200ResponseValueInner from a JSON string
user_identities_list200_response_value_inner_instance = UserIdentitiesList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(UserIdentitiesList200ResponseValueInner.to_json())

# convert the object into a dict
user_identities_list200_response_value_inner_dict = user_identities_list200_response_value_inner_instance.to_dict()
# create an instance of UserIdentitiesList200ResponseValueInner from a dict
user_identities_list200_response_value_inner_from_dict = UserIdentitiesList200ResponseValueInner.from_dict(user_identities_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


