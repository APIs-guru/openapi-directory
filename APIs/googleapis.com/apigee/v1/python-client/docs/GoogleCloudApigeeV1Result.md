# GoogleCloudApigeeV1Result

Result is short for \"action result\", could be different types identified by \"action_result\" field. Supported types: 1. DebugInfo : generic debug info collected by runtime recorded as a list of properties. For example, the contents could be virtual host info, state change result, or execution metadata. Required fields : properties, timestamp 2. RequestMessage: information of a http request. Contains headers, request URI and http methods type.Required fields : headers, uri, verb 3. ResponseMessage: information of a http response. Contains headers, reason phrase and http status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information of a http error message. Contains detail error message, reason phrase and status code. Required fields : content, headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access actions, can be Get, Set and Remove. Required fields : accessList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_result** | **str** | Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage, ErrorMessage, VariableAccess | [optional] 
**access_list** | [**List[GoogleCloudApigeeV1Access]**](GoogleCloudApigeeV1Access.md) | A list of variable access actions agaist the api proxy. Supported values: Get, Set, Remove. | [optional] 
**content** | **str** | Error message content. for example, \&quot;content\&quot; : \&quot;{\\\&quot;fault\\\&quot;:{\\\&quot;faultstring\\\&quot;:\\\&quot;API timed out\\\&quot;,\\\&quot;detail\\\&quot;:{\\\&quot;errorcode\\\&quot;:\\\&quot;flow.APITimedOut\\\&quot;}}}\&quot; | [optional] 
**headers** | [**List[GoogleCloudApigeeV1Property]**](GoogleCloudApigeeV1Property.md) | A list of HTTP headers. for example, &#39;\&quot;headers\&quot; : [ { \&quot;name\&quot; : \&quot;Content-Length\&quot;, \&quot;value\&quot; : \&quot;83\&quot; }, { \&quot;name\&quot; : \&quot;Content-Type\&quot;, \&quot;value\&quot; : \&quot;application/json\&quot; } ]&#39; | [optional] 
**properties** | [**GoogleCloudApigeeV1Properties**](GoogleCloudApigeeV1Properties.md) |  | [optional] 
**reason_phrase** | **str** | HTTP response phrase | [optional] 
**status_code** | **str** | HTTP response code | [optional] 
**timestamp** | **str** | Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example, &#x60;\&quot;timestamp\&quot; : \&quot;12-08-19 00:31:59:960\&quot;&#x60; | [optional] 
**u_ri** | **str** | The relative path of the api proxy. for example, &#x60;\&quot;uRI\&quot; : \&quot;/iloveapis\&quot;&#x60; | [optional] 
**verb** | **str** | HTTP method verb | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_result import GoogleCloudApigeeV1Result

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Result from a JSON string
google_cloud_apigee_v1_result_instance = GoogleCloudApigeeV1Result.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Result.to_json())

# convert the object into a dict
google_cloud_apigee_v1_result_dict = google_cloud_apigee_v1_result_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Result from a dict
google_cloud_apigee_v1_result_from_dict = GoogleCloudApigeeV1Result.from_dict(google_cloud_apigee_v1_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


