# Operation

Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zoneOperations` resource. For more information, read Global, Regional, and Zonal Resources. Note that completed Operation resources have a limited retention period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_operation_id** | **str** | [Output Only] The value of &#x60;requestId&#x60; if you provided it in the request. Not present otherwise. | [optional] 
**creation_timestamp** | **str** | [Deprecated] This field is deprecated. | [optional] 
**description** | **str** | [Output Only] A textual description of the operation, which is set when the operation is created. | [optional] 
**end_time** | **str** | [Output Only] The time that this operation was completed. This value is in RFC3339 text format. | [optional] 
**error** | [**OperationError**](OperationError.md) |  | [optional] 
**http_error_message** | **str** | [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as &#x60;NOT FOUND&#x60;. | [optional] 
**http_error_status_code** | **int** | [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a &#x60;404&#x60; means the resource was not found. | [optional] 
**id** | **str** | [Output Only] The unique identifier for the operation. This identifier is defined by the server. | [optional] 
**insert_time** | **str** | [Output Only] The time that this operation was requested. This value is in RFC3339 text format. | [optional] 
**instances_bulk_insert_operation_metadata** | [**InstancesBulkInsertOperationMetadata**](InstancesBulkInsertOperationMetadata.md) |  | [optional] 
**kind** | **str** | [Output Only] Type of the resource. Always &#x60;compute#operation&#x60; for Operation resources. | [optional] [default to 'compute#operation']
**name** | **str** | [Output Only] Name of the operation. | [optional] 
**operation_group_id** | **str** | [Output Only] An ID that represents a group of operations, such as when a group of operations results from a &#x60;bulkInsert&#x60; API request. | [optional] 
**operation_type** | **str** | [Output Only] The type of operation, such as &#x60;insert&#x60;, &#x60;update&#x60;, or &#x60;delete&#x60;, and so on. | [optional] 
**progress** | **int** | [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses. | [optional] 
**region** | **str** | [Output Only] The URL of the region where the operation resides. Only applicable when performing regional operations. | [optional] 
**self_link** | **str** | [Output Only] Server-defined URL for the resource. | [optional] 
**set_common_instance_metadata_operation_metadata** | [**SetCommonInstanceMetadataOperationMetadata**](SetCommonInstanceMetadataOperationMetadata.md) |  | [optional] 
**start_time** | **str** | [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format. | [optional] 
**status** | **str** | [Output Only] The status of the operation, which can be one of the following: &#x60;PENDING&#x60;, &#x60;RUNNING&#x60;, or &#x60;DONE&#x60;. | [optional] 
**status_message** | **str** | [Output Only] An optional textual description of the current status of the operation. | [optional] 
**target_id** | **str** | [Output Only] The unique target ID, which identifies a specific incarnation of the target resource. | [optional] 
**target_link** | **str** | [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from. | [optional] 
**user** | **str** | [Output Only] User who requested the operation, for example: &#x60;user@example.com&#x60; or &#x60;alice_smith_identifier (global/workforcePools/example-com-us-employees)&#x60;. | [optional] 
**warnings** | [**List[OperationWarningsInner]**](OperationWarningsInner.md) | [Output Only] If warning messages are generated during processing of the operation, this field will be populated. | [optional] 
**zone** | **str** | [Output Only] The URL of the zone where the operation resides. Only applicable when performing per-zone operations. | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


