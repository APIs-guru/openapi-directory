# Publishing

This message configures the settings for publishing [Google Cloud Client libraries](https://cloud.google.com/apis/docs/cloud-client-libraries) generated from the service config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_short_name** | **str** | Used as a tracking tag when collecting data about the APIs developer relations artifacts like docs, packages delivered to package managers, etc. Example: \&quot;speech\&quot;. | [optional] 
**codeowner_github_teams** | **List[str]** | GitHub teams to be added to CODEOWNERS in the directory in GitHub containing source code for the client libraries for this API. | [optional] 
**doc_tag_prefix** | **str** | A prefix used in sample code when demarking regions to be included in documentation. | [optional] 
**documentation_uri** | **str** | Link to product home page. Example: https://cloud.google.com/asset-inventory/docs/overview | [optional] 
**github_label** | **str** | GitHub label to apply to issues and pull requests opened for this API. | [optional] 
**library_settings** | [**List[ClientLibrarySettings]**](ClientLibrarySettings.md) | Client library settings. If the same version string appears multiple times in this list, then the last one wins. Settings from earlier settings with the same version string are discarded. | [optional] 
**method_settings** | [**List[MethodSettings]**](MethodSettings.md) | A list of API method settings, e.g. the behavior for methods that use the long-running operation pattern. | [optional] 
**new_issue_uri** | **str** | Link to a *public* URI where users can report issues. Example: https://issuetracker.google.com/issues/new?component&#x3D;190865&amp;template&#x3D;1161103 | [optional] 
**organization** | **str** | For whom the client library is being published. | [optional] 
**proto_reference_documentation_uri** | **str** | Optional link to proto reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rpc | [optional] 
**rest_reference_documentation_uri** | **str** | Optional link to REST reference documentation. Example: https://cloud.google.com/pubsub/lite/docs/reference/rest | [optional] 

## Example

```python
from openapi_client.models.publishing import Publishing

# TODO update the JSON string below
json = "{}"
# create an instance of Publishing from a JSON string
publishing_instance = Publishing.from_json(json)
# print the JSON string representation of the object
print(Publishing.to_json())

# convert the object into a dict
publishing_dict = publishing_instance.to_dict()
# create an instance of Publishing from a dict
publishing_from_dict = Publishing.from_dict(publishing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


