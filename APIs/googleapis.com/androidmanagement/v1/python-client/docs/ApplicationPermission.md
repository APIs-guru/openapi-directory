# ApplicationPermission

A permission required by the app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A longer description of the permission, providing more detail on what it affects. Localized. | [optional] 
**name** | **str** | The name of the permission. Localized. | [optional] 
**permission_id** | **str** | An opaque string uniquely identifying the permission. Not localized. | [optional] 

## Example

```python
from openapi_client.models.application_permission import ApplicationPermission

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPermission from a JSON string
application_permission_instance = ApplicationPermission.from_json(json)
# print the JSON string representation of the object
print(ApplicationPermission.to_json())

# convert the object into a dict
application_permission_dict = application_permission_instance.to_dict()
# create an instance of ApplicationPermission from a dict
application_permission_from_dict = ApplicationPermission.from_dict(application_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


