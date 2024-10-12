# IamPolicySearchResult

A result of IAM Policy search, containing information of an IAM policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_type** | **str** | The type of the resource associated with this IAM policy. Example: &#x60;compute.googleapis.com/Disk&#x60;. To search against the &#x60;asset_type&#x60;: * specify the &#x60;asset_types&#x60; field in your search request. | [optional] 
**explanation** | [**Explanation**](Explanation.md) |  | [optional] 
**folders** | **List[str]** | The folder(s) that the IAM policy belongs to, in the form of folders/{FOLDER_NUMBER}. This field is available when the IAM policy belongs to one or more folders. To search against &#x60;folders&#x60;: * use a field query. Example: &#x60;folders:(123 OR 456)&#x60; * use a free text query. Example: &#x60;123&#x60; * specify the &#x60;scope&#x60; field as this folder in your search request. | [optional] 
**organization** | **str** | The organization that the IAM policy belongs to, in the form of organizations/{ORGANIZATION_NUMBER}. This field is available when the IAM policy belongs to an organization. To search against &#x60;organization&#x60;: * use a field query. Example: &#x60;organization:123&#x60; * use a free text query. Example: &#x60;123&#x60; * specify the &#x60;scope&#x60; field as this organization in your search request. | [optional] 
**policy** | [**Policy**](Policy.md) |  | [optional] 
**project** | **str** | The project that the associated Google Cloud resource belongs to, in the form of projects/{PROJECT_NUMBER}. If an IAM policy is set on a resource (like VM instance, Cloud Storage bucket), the project field will indicate the project that contains the resource. If an IAM policy is set on a folder or orgnization, this field will be empty. To search against the &#x60;project&#x60;: * specify the &#x60;scope&#x60; field as this project in your search request. | [optional] 
**resource** | **str** | The full resource name of the resource associated with this IAM policy. Example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60;. See [Cloud Asset Inventory Resource Name Format](https://cloud.google.com/asset-inventory/docs/resource-name-format) for more information. To search against the &#x60;resource&#x60;: * use a field query. Example: &#x60;resource:organizations/123&#x60; | [optional] 

## Example

```python
from openapi_client.models.iam_policy_search_result import IamPolicySearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of IamPolicySearchResult from a JSON string
iam_policy_search_result_instance = IamPolicySearchResult.from_json(json)
# print the JSON string representation of the object
print(IamPolicySearchResult.to_json())

# convert the object into a dict
iam_policy_search_result_dict = iam_policy_search_result_instance.to_dict()
# create an instance of IamPolicySearchResult from a dict
iam_policy_search_result_from_dict = IamPolicySearchResult.from_dict(iam_policy_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


