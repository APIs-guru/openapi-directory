# AdminSdkConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_url** | **str** | **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database URL. | [optional] 
**location_id** | **str** | **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project&#39;s default GCP resource location, call [&#x60;FinalizeDefaultLocation&#x60;](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. | [optional] 
**project_id** | **str** | Immutable. A user-assigned unique identifier for the &#x60;FirebaseProject&#x60;. This identifier may appear in URLs or names for some Firebase resources associated with the Project, but it should generally be treated as a convenience alias to reference the Project. | [optional] 
**storage_bucket** | **str** | **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket name. | [optional] 

## Example

```python
from openapi_client.models.admin_sdk_config import AdminSdkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdminSdkConfig from a JSON string
admin_sdk_config_instance = AdminSdkConfig.from_json(json)
# print the JSON string representation of the object
print(AdminSdkConfig.to_json())

# convert the object into a dict
admin_sdk_config_dict = admin_sdk_config_instance.to_dict()
# create an instance of AdminSdkConfig from a dict
admin_sdk_config_from_dict = AdminSdkConfig.from_dict(admin_sdk_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


