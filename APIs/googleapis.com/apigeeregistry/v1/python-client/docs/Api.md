# Api

A top-level description of an API. Produced by producers and are commitments to provide services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. | [optional] 
**availability** | **str** | A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g., \&quot;NONE\&quot;, \&quot;TESTING\&quot;, \&quot;PREVIEW\&quot;, \&quot;GENERAL\&quot;, \&quot;DEPRECATED\&quot;, \&quot;SHUTDOWN\&quot;. | [optional] 
**create_time** | **str** | Output only. Creation timestamp. | [optional] [readonly] 
**description** | **str** | A detailed description. | [optional] 
**display_name** | **str** | Human-meaningful name. | [optional] 
**labels** | **Dict[str, str]** | Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with &#x60;apigeeregistry.googleapis.com/&#x60; and cannot be changed. | [optional] 
**name** | **str** | Resource name. | [optional] 
**recommended_deployment** | **str** | The recommended deployment of the API. Format: &#x60;projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}&#x60; | [optional] 
**recommended_version** | **str** | The recommended version of the API. Format: &#x60;projects/{project}/locations/{location}/apis/{api}/versions/{version}&#x60; | [optional] 
**update_time** | **str** | Output only. Last update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api import Api

# TODO update the JSON string below
json = "{}"
# create an instance of Api from a JSON string
api_instance = Api.from_json(json)
# print the JSON string representation of the object
print(Api.to_json())

# convert the object into a dict
api_dict = api_instance.to_dict()
# create an instance of Api from a dict
api_from_dict = Api.from_dict(api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


