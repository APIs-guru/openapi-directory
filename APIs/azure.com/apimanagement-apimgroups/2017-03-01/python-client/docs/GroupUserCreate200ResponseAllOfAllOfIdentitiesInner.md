# GroupUserCreate200ResponseAllOfAllOfIdentitiesInner

User identity details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier value within provider. | [optional] 
**provider** | **str** | Identity provider name. | [optional] 

## Example

```python
from openapi_client.models.group_user_create200_response_all_of_all_of_identities_inner import GroupUserCreate200ResponseAllOfAllOfIdentitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUserCreate200ResponseAllOfAllOfIdentitiesInner from a JSON string
group_user_create200_response_all_of_all_of_identities_inner_instance = GroupUserCreate200ResponseAllOfAllOfIdentitiesInner.from_json(json)
# print the JSON string representation of the object
print(GroupUserCreate200ResponseAllOfAllOfIdentitiesInner.to_json())

# convert the object into a dict
group_user_create200_response_all_of_all_of_identities_inner_dict = group_user_create200_response_all_of_all_of_identities_inner_instance.to_dict()
# create an instance of GroupUserCreate200ResponseAllOfAllOfIdentitiesInner from a dict
group_user_create200_response_all_of_all_of_identities_inner_from_dict = GroupUserCreate200ResponseAllOfAllOfIdentitiesInner.from_dict(group_user_create200_response_all_of_all_of_identities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


