# ContainerAccess

Defines the Google Tag Manager Container access permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_id** | **str** | GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update | [optional] 
**permission** | **List[str]** | List of Container permissions. Valid container permissions are: read, edit, delete, publish. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update | [optional] 

## Example

```python
from openapi_client.models.container_access import ContainerAccess

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerAccess from a JSON string
container_access_instance = ContainerAccess.from_json(json)
# print the JSON string representation of the object
print(ContainerAccess.to_json())

# convert the object into a dict
container_access_dict = container_access_instance.to_dict()
# create an instance of ContainerAccess from a dict
container_access_from_dict = ContainerAccess.from_dict(container_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


