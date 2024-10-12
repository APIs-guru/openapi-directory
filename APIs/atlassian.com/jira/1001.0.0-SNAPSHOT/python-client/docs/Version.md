# Version

Details about a project version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** | Indicates that the version is archived. Optional when creating or updating a version. | [optional] 
**description** | **str** | The description of the version. Optional when creating or updating a version. | [optional] 
**expand** | **str** | Use [expand](em&gt;#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;operations&#x60; Returns the list of operations available for this version.  *  &#x60;issuesstatus&#x60; Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*.  Optional for create and update. | [optional] 
**id** | **str** | The ID of the version. | [optional] [readonly] 
**issues_status_for_fix_version** | [**VersionIssuesStatus**](VersionIssuesStatus.md) | If the expand option &#x60;issuesstatus&#x60; is used, returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property contains a count of issues with a status other than *to do*, *in progress*, and *done*. | [optional] [readonly] 
**move_unfixed_issues_to** | **str** | The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version. | [optional] 
**name** | **str** | The unique name of the version. Required when creating a version. Optional when updating a version. The maximum length is 255 characters. | [optional] 
**operations** | [**List[SimpleLink]**](SimpleLink.md) | If the expand option &#x60;operations&#x60; is used, returns the list of operations available for this version. | [optional] [readonly] 
**overdue** | **bool** | Indicates that the version is overdue. | [optional] [readonly] 
**project** | **str** | Deprecated. Use &#x60;projectId&#x60;. | [optional] 
**project_id** | **int** | The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version. | [optional] 
**release_date** | **date** | The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. | [optional] 
**released** | **bool** | Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version. | [optional] 
**var_self** | **str** | The URL of the version. | [optional] [readonly] 
**start_date** | **date** | The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. | [optional] 
**user_release_date** | **str** | The date on which work on this version is expected to finish, expressed in the instance&#39;s *Day/Month/Year Format* date format. | [optional] [readonly] 
**user_start_date** | **str** | The date on which work on this version is expected to start, expressed in the instance&#39;s *Day/Month/Year Format* date format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.version import Version

# TODO update the JSON string below
json = "{}"
# create an instance of Version from a JSON string
version_instance = Version.from_json(json)
# print the JSON string representation of the object
print(Version.to_json())

# convert the object into a dict
version_dict = version_instance.to_dict()
# create an instance of Version from a dict
version_from_dict = Version.from_dict(version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


