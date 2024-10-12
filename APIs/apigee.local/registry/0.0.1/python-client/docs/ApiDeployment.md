# ApiDeployment

An ApiDeployment describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_guidance** | **str** | Text briefly describing how to access the endpoint. Changes to this value will not affect the revision. | [optional] 
**annotations** | **Dict[str, str]** | Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. | [optional] 
**api_spec_revision** | **str** | The full resource name (including revision id) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: apis/{api}/deployments/{deployment} | [optional] 
**create_time** | **datetime** | Output only. Creation timestamp; when the deployment resource was created. | [optional] [readonly] 
**description** | **str** | A detailed description. | [optional] 
**display_name** | **str** | Human-meaningful name. | [optional] 
**endpoint_uri** | **str** | The address where the deployment is serving. Changes to this value will update the revision. | [optional] 
**external_channel_uri** | **str** | The address of the external channel of the API (e.g. the Developer Portal). Changes to this value will not affect the revision. | [optional] 
**intended_audience** | **str** | Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision. | [optional] 
**labels** | **Dict[str, str]** | Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;registry.googleapis.com/\&quot; and cannot be changed. | [optional] 
**name** | **str** | Resource name. | [optional] 
**revision_create_time** | **datetime** | Output only. Revision creation timestamp; when the represented revision was created. | [optional] [readonly] 
**revision_id** | **str** | Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string. | [optional] [readonly] 
**revision_update_time** | **datetime** | Output only. Last update timestamp: when the represented revision was last modified. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_deployment import ApiDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDeployment from a JSON string
api_deployment_instance = ApiDeployment.from_json(json)
# print the JSON string representation of the object
print(ApiDeployment.to_json())

# convert the object into a dict
api_deployment_dict = api_deployment_instance.to_dict()
# create an instance of ApiDeployment from a dict
api_deployment_from_dict = ApiDeployment.from_dict(api_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


