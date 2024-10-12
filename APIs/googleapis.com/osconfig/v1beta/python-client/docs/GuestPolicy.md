# GuestPolicy

An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment** | [**Assignment**](Assignment.md) |  | [optional] 
**create_time** | **str** | Output only. Time this guest policy was created. | [optional] [readonly] 
**description** | **str** | Description of the guest policy. Length of the description is limited to 1024 characters. | [optional] 
**etag** | **str** | The etag for this guest policy. If this is provided on update, it must match the server&#39;s etag. | [optional] 
**name** | **str** | Required. Unique name of the resource in this project using one of the following forms: &#x60;projects/{project_number}/guestPolicies/{guest_policy_id}&#x60;. | [optional] 
**package_repositories** | [**List[PackageRepository]**](PackageRepository.md) | A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available. | [optional] 
**packages** | [**List[Package]**](Package.md) | The software packages to be managed by this policy. | [optional] 
**recipes** | [**List[SoftwareRecipe]**](SoftwareRecipe.md) | A list of Recipes to install on the VM instance. | [optional] 
**update_time** | **str** | Output only. Last time this guest policy was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.guest_policy import GuestPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GuestPolicy from a JSON string
guest_policy_instance = GuestPolicy.from_json(json)
# print the JSON string representation of the object
print(GuestPolicy.to_json())

# convert the object into a dict
guest_policy_dict = guest_policy_instance.to_dict()
# create an instance of GuestPolicy from a dict
guest_policy_from_dict = GuestPolicy.from_dict(guest_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


