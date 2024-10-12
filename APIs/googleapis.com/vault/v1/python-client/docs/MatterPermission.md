# MatterPermission

Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID, as provided by the [Admin SDK](https://developers.google.com/admin-sdk/). | [optional] 
**role** | **str** | The user&#39;s role for the matter. | [optional] 

## Example

```python
from openapi_client.models.matter_permission import MatterPermission

# TODO update the JSON string below
json = "{}"
# create an instance of MatterPermission from a JSON string
matter_permission_instance = MatterPermission.from_json(json)
# print the JSON string representation of the object
print(MatterPermission.to_json())

# convert the object into a dict
matter_permission_dict = matter_permission_instance.to_dict()
# create an instance of MatterPermission from a dict
matter_permission_from_dict = MatterPermission.from_dict(matter_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


