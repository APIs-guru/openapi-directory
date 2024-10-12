# AccountChildLink

Child link for an account entry. Points to the list of web properties for this account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the list of web properties for this account. | [optional] 
**type** | **str** | Type of the child link. Its value is \&quot;analytics#webproperties\&quot;. | [optional] [default to 'analytics#webproperties']

## Example

```python
from openapi_client.models.account_child_link import AccountChildLink

# TODO update the JSON string below
json = "{}"
# create an instance of AccountChildLink from a JSON string
account_child_link_instance = AccountChildLink.from_json(json)
# print the JSON string representation of the object
print(AccountChildLink.to_json())

# convert the object into a dict
account_child_link_dict = account_child_link_instance.to_dict()
# create an instance of AccountChildLink from a dict
account_child_link_from_dict = AccountChildLink.from_dict(account_child_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


