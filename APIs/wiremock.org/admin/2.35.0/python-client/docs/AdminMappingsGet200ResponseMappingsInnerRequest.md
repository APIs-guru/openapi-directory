# AdminMappingsGet200ResponseMappingsInnerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_auth_credentials** | [**AdminMappingsGet200ResponseMappingsInnerRequestBasicAuthCredentials**](AdminMappingsGet200ResponseMappingsInnerRequestBasicAuthCredentials.md) |  | [optional] 
**body_patterns** | **List[object]** | Request body patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**cookies** | **object** | Cookie patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**headers** | **object** | Header patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**method** | **str** | The HTTP request method e.g. GET | [optional] 
**query_parameters** | **object** | Query parameter patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**url** | **str** | The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 
**url_path** | **str** | The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 
**url_path_pattern** | **str** | The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 
**url_pattern** | **str** | The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 

## Example

```python
from openapi_client.models.admin_mappings_get200_response_mappings_inner_request import AdminMappingsGet200ResponseMappingsInnerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdminMappingsGet200ResponseMappingsInnerRequest from a JSON string
admin_mappings_get200_response_mappings_inner_request_instance = AdminMappingsGet200ResponseMappingsInnerRequest.from_json(json)
# print the JSON string representation of the object
print(AdminMappingsGet200ResponseMappingsInnerRequest.to_json())

# convert the object into a dict
admin_mappings_get200_response_mappings_inner_request_dict = admin_mappings_get200_response_mappings_inner_request_instance.to_dict()
# create an instance of AdminMappingsGet200ResponseMappingsInnerRequest from a dict
admin_mappings_get200_response_mappings_inner_request_from_dict = AdminMappingsGet200ResponseMappingsInnerRequest.from_dict(admin_mappings_get200_response_mappings_inner_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


