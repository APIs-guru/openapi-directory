# NewPermissionsEvent

An event generated when new permissions are added to an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_permissions** | **List[str]** | The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions. | [optional] 
**product_id** | **str** | The id of the product (e.g. \&quot;app:com.google.android.gm\&quot;) for which new permissions were added. This field will always be present. | [optional] 
**requested_permissions** | **List[str]** | The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions. | [optional] 

## Example

```python
from openapi_client.models.new_permissions_event import NewPermissionsEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NewPermissionsEvent from a JSON string
new_permissions_event_instance = NewPermissionsEvent.from_json(json)
# print the JSON string representation of the object
print(NewPermissionsEvent.to_json())

# convert the object into a dict
new_permissions_event_dict = new_permissions_event_instance.to_dict()
# create an instance of NewPermissionsEvent from a dict
new_permissions_event_from_dict = NewPermissionsEvent.from_dict(new_permissions_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


