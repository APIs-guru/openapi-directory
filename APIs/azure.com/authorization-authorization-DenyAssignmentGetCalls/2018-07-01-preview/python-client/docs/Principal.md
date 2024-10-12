# Principal

Deny assignment principal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Object ID of the Azure AD principal (user, group, or service principal) to which the deny assignment applies. An empty guid &#39;00000000-0000-0000-0000-000000000000&#39; as principal id and principal type as &#39;Everyone&#39; represents all users, groups and service principals. | [optional] [readonly] 
**type** | **str** | Type of object represented by principal id (user, group, or service principal). An empty guid &#39;00000000-0000-0000-0000-000000000000&#39; as principal id and principal type as &#39;Everyone&#39; represents all users, groups and service principals. | [optional] [readonly] 

## Example

```python
from openapi_client.models.principal import Principal

# TODO update the JSON string below
json = "{}"
# create an instance of Principal from a JSON string
principal_instance = Principal.from_json(json)
# print the JSON string representation of the object
print(Principal.to_json())

# convert the object into a dict
principal_dict = principal_instance.to_dict()
# create an instance of Principal from a dict
principal_from_dict = Principal.from_dict(principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


