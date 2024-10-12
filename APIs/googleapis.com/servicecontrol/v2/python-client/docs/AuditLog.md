# AuditLog

Common audit log format for Google Cloud Platform API operations. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_info** | [**AuthenticationInfo**](AuthenticationInfo.md) |  | [optional] 
**authorization_info** | [**List[AuthorizationInfo]**](AuthorizationInfo.md) | Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple. | [optional] 
**metadata** | **Dict[str, object]** | Other service-specific data about the request, response, and other information associated with the current audited event. | [optional] 
**method_name** | **str** | The name of the service method or operation. For API calls, this should be the name of the API method. For example, \&quot;google.cloud.bigquery.v2.TableService.InsertTable\&quot; \&quot;google.logging.v2.ConfigServiceV2.CreateSink\&quot; | [optional] 
**num_response_items** | **str** | The number of items returned from a List or Query API method, if applicable. | [optional] 
**policy_violation_info** | [**PolicyViolationInfo**](PolicyViolationInfo.md) |  | [optional] 
**request** | **Dict[str, object]** | The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the &#x60;@type&#x60; property. | [optional] 
**request_metadata** | [**RequestMetadata**](RequestMetadata.md) |  | [optional] 
**resource_location** | [**ResourceLocation**](ResourceLocation.md) |  | [optional] 
**resource_name** | **str** | The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: \&quot;projects/PROJECT_ID/zones/us-central1-a/instances\&quot; \&quot;projects/PROJECT_ID/datasets/DATASET_ID\&quot; | [optional] 
**resource_original_state** | **Dict[str, object]** | The resource&#39;s original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in &#x60;request&#x60;, &#x60;response&#x60;, &#x60;metadata&#x60; or &#x60;service_data&#x60; fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the &#x60;@type&#x60; property. | [optional] 
**response** | **Dict[str, object]** | The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the &#x60;@type&#x60; property. | [optional] 
**service_data** | **Dict[str, object]** | Deprecated. Use the &#x60;metadata&#x60; field instead. Other service-specific data about the request, response, and other activities. | [optional] 
**service_name** | **str** | The name of the API service performing the operation. For example, &#x60;\&quot;compute.googleapis.com\&quot;&#x60;. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.audit_log import AuditLog

# TODO update the JSON string below
json = "{}"
# create an instance of AuditLog from a JSON string
audit_log_instance = AuditLog.from_json(json)
# print the JSON string representation of the object
print(AuditLog.to_json())

# convert the object into a dict
audit_log_dict = audit_log_instance.to_dict()
# create an instance of AuditLog from a dict
audit_log_from_dict = AuditLog.from_dict(audit_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


