# DefaultResources

**DEPRECATED.** _Auto-provisioning of these resources is changing, so this object no longer reliably provides information about the resources within the Project. Instead, retrieve information about each resource directly from its resource-specific API._ The default auto-provisioned resources associated with the Project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hosting_site** | **str** | Output only. **DEPRECATED.** _Instead, find the default Firebase Hosting site name using the [ListSites](https://firebase.google.com/docs/reference/hosting/rest/v1beta1/projects.sites/list) within the Firebase Hosting REST API. Note that the default site for the Project might not yet be provisioned, so the return might not contain a default site._ The default Firebase Hosting site name, in the format: PROJECT_ID Though rare, your &#x60;projectId&#x60; might already be used as the name for an existing Hosting site in another project (learn more about creating non-default, [additional sites](https://firebase.google.com/docs/hosting/multisites)). In these cases, your &#x60;projectId&#x60; is appended with a hyphen then five alphanumeric characters to create your default Hosting site name. For example, if your &#x60;projectId&#x60; is &#x60;myproject123&#x60;, your default Hosting site name might be: &#x60;myproject123-a5c16&#x60; | [optional] [readonly] 
**location_id** | **str** | Output only. **DEPRECATED.** _Instead, use product-specific REST APIs to find the location of resources._ The ID of the Project&#39;s default GCP resource location. The location is one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). This field is omitted if the default GCP resource location has not been finalized yet. To set a Project&#39;s default GCP resource location, call [&#x60;FinalizeDefaultLocation&#x60;](../projects.defaultLocation/finalize) after you add Firebase resources to the Project. | [optional] [readonly] 
**realtime_database_instance** | **str** | Output only. **DEPRECATED.** _Instead, find the default Firebase Realtime Database instance name using the [list endpoint](https://firebase.google.com/docs/reference/rest/database/database-management/rest/v1beta/projects.locations.instances/list) within the Firebase Realtime Database REST API. Note that the default instance for the Project might not yet be provisioned, so the return might not contain a default instance._ The default Firebase Realtime Database instance name, in the format: PROJECT_ID Though rare, your &#x60;projectId&#x60; might already be used as the name for an existing Realtime Database instance in another project (learn more about [database sharding](https://firebase.google.com/docs/database/usage/sharding)). In these cases, your &#x60;projectId&#x60; is appended with a hyphen then five alphanumeric characters to create your default Realtime Database instance name. For example, if your &#x60;projectId&#x60; is &#x60;myproject123&#x60;, your default database instance name might be: &#x60;myproject123-a5c16&#x60; | [optional] [readonly] 
**storage_bucket** | **str** | Output only. **DEPRECATED.** _Instead, find the default Cloud Storage for Firebase bucket using the [list endpoint](https://firebase.google.com/docs/reference/rest/storage/rest/v1beta/projects.buckets/list) within the Cloud Storage for Firebase REST API. Note that the default bucket for the Project might not yet be provisioned, so the return might not contain a default bucket._ The default Cloud Storage for Firebase storage bucket, in the format: PROJECT_ID.appspot.com | [optional] [readonly] 

## Example

```python
from openapi_client.models.default_resources import DefaultResources

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResources from a JSON string
default_resources_instance = DefaultResources.from_json(json)
# print the JSON string representation of the object
print(DefaultResources.to_json())

# convert the object into a dict
default_resources_dict = default_resources_instance.to_dict()
# create an instance of DefaultResources from a dict
default_resources_from_dict = DefaultResources.from_dict(default_resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


