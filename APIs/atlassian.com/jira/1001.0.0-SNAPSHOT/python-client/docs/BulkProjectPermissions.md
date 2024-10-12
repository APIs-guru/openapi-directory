# BulkProjectPermissions

Details of project permissions and associated issues and projects to look up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | **List[int]** | List of issue IDs. | [optional] 
**permissions** | **List[str]** | List of project permissions. | 
**projects** | **List[int]** | List of project IDs. | [optional] 

## Example

```python
from openapi_client.models.bulk_project_permissions import BulkProjectPermissions

# TODO update the JSON string below
json = "{}"
# create an instance of BulkProjectPermissions from a JSON string
bulk_project_permissions_instance = BulkProjectPermissions.from_json(json)
# print the JSON string representation of the object
print(BulkProjectPermissions.to_json())

# convert the object into a dict
bulk_project_permissions_dict = bulk_project_permissions_instance.to_dict()
# create an instance of BulkProjectPermissions from a dict
bulk_project_permissions_from_dict = BulkProjectPermissions.from_dict(bulk_project_permissions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


