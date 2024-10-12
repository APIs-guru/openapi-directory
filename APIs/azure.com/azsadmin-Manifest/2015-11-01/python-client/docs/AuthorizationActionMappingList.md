# AuthorizationActionMappingList

List of the read-only actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[AuthorizationActionMapping]**](AuthorizationActionMapping.md) | List of the read-only actions. | [optional] 

## Example

```python
from openapi_client.models.authorization_action_mapping_list import AuthorizationActionMappingList

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationActionMappingList from a JSON string
authorization_action_mapping_list_instance = AuthorizationActionMappingList.from_json(json)
# print the JSON string representation of the object
print(AuthorizationActionMappingList.to_json())

# convert the object into a dict
authorization_action_mapping_list_dict = authorization_action_mapping_list_instance.to_dict()
# create an instance of AuthorizationActionMappingList from a dict
authorization_action_mapping_list_from_dict = AuthorizationActionMappingList.from_dict(authorization_action_mapping_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


