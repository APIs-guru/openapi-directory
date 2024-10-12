# BitbucketCloudIntegration

Configuration details for the Bitbucket Cloud integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 
**branch** | **str** | The branch to synchronize to. If it does not exist in the repository, it will be created based on the default branch. Branch name must not contain whitespace characters.  | 
**ignored_paths** | **List[str]** | Ignored Paths: These files and folders (if exist) will remain as is and will not be changed in any way. Paths are relative to the &#x60;outputFolder&#x60;. Use forward slashes &#x60;/&#x60; as folder separators, but do not add &#x60;/&#x60; at the beginning of the paths.  | [optional] 
**managed_paths** | **List[str]** | Fully Managed Paths: These files and folders will be completely managed by the integration. New files will be added, the existing files will be overwritten, and the files that are no longer used will be deleted.  Paths are relative to the &#x60;outputFolder&#x60;. Use forward slashes &#x60;/&#x60; as folder separators, but do not add &#x60;/&#x60; at the beginning of the paths. &#x60;*&#x60; means all files in the &#x60;outputFolder&#x60;.  | [optional] 
**output_file** | **str** | Required if &#x60;target&#x60; is \&quot;YAML (Resolved)\&quot;, \&quot;YAML (Unresolved)\&quot;, \&quot;JSON (Resolved)\&quot;, or \&quot;JSON (Unresolved)\&quot;. Specifies the file name for the generated definition. | [optional] 
**output_folder** | **str** | The output folder for the generated code or definition, relative to the repository root. If this folder does not exist, it will be created. If the output folder is not specified, SwaggerHub will create files and folders in the repository root. Use forward slashes &#x60;/&#x60; as path separators, but do not add &#x60;/&#x60; at the beginning.  | 
**provided_paths** | **List[str]** | Partially Managed Paths: These files and folders will be created only if they do not exist. Existing files will not be modified. Paths are relative to the &#x60;outputFolder&#x60;. Use forward slashes &#x60;/&#x60; as folder separators, but do not add &#x60;/&#x60; at the beginning of the paths. &#x60;*&#x60; means all files in the &#x60;outputFolder&#x60;.  | [optional] 
**repository** | **str** | The repository to synchronize with | 
**sync_method** | **str** | \&quot;Basic Sync\&quot; or \&quot;Advanced Sync\&quot;. Basic Sync will manage all files and folders in the branch. Advanced Sync allows you to define which files and folders will be managed by SwaggerHub. Note: If \&quot;Advanced Sync\&quot; is used, you must specify either &#x60;providedPaths&#x60; or &#x60;managedPaths&#x60;.  | 
**target** | **str** | The type of code to generate and push to the repository. For the possible values, start creating any source control integration manually and check the \&quot;Generated API Code\&quot; values. Note that the available codegens for OAS2 and OAS3 vary.  | 
**config_type** | **str** | Integration type | 
**owner** | **str** | The owner of the Bitbucket repository to synchronize with | 
**password** | **str** | Bitbucket [app password](https://support.atlassian.com/bitbucket-cloud/docs/app-passwords/) to authenticate with. Write-only property. Required to create and update the integration. This app password must correspond to the &#x60;username&#x60; account and have the following permissions:   * Account: Email, Read  * Repositories: Read, Write  | [optional] 
**username** | **str** | Bitbucket username to authenticate with | 

## Example

```python
from openapi_client.models.bitbucket_cloud_integration import BitbucketCloudIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of BitbucketCloudIntegration from a JSON string
bitbucket_cloud_integration_instance = BitbucketCloudIntegration.from_json(json)
# print the JSON string representation of the object
print(BitbucketCloudIntegration.to_json())

# convert the object into a dict
bitbucket_cloud_integration_dict = bitbucket_cloud_integration_instance.to_dict()
# create an instance of BitbucketCloudIntegration from a dict
bitbucket_cloud_integration_from_dict = BitbucketCloudIntegration.from_dict(bitbucket_cloud_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


