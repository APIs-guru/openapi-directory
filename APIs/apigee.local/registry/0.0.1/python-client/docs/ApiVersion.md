# ApiVersion

An ApiVersion describes a particular version of an API. ApiVersions are what consumers actually use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts. | [optional] 
**create_time** | **datetime** | Output only. Creation timestamp. | [optional] [readonly] 
**description** | **str** | A detailed description. | [optional] 
**display_name** | **str** | Human-meaningful name. | [optional] 
**labels** | **Dict[str, str]** | Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;apigeeregistry.googleapis.com/\&quot; and cannot be changed. | [optional] 
**name** | **str** | Resource name. | [optional] 
**state** | **str** | A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. \&quot;CONCEPT\&quot;, \&quot;DESIGN\&quot;, \&quot;DEVELOPMENT\&quot;, \&quot;STAGING\&quot;, \&quot;PRODUCTION\&quot;, \&quot;DEPRECATED\&quot;, \&quot;RETIRED\&quot;. | [optional] 
**update_time** | **datetime** | Output only. Last update timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_version import ApiVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersion from a JSON string
api_version_instance = ApiVersion.from_json(json)
# print the JSON string representation of the object
print(ApiVersion.to_json())

# convert the object into a dict
api_version_dict = api_version_instance.to_dict()
# create an instance of ApiVersion from a dict
api_version_from_dict = ApiVersion.from_dict(api_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


