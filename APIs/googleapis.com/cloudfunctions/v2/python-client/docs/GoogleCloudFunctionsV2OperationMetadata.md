# GoogleCloudFunctionsV2OperationMetadata

Represents the metadata of the long-running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | API version used to start the operation. | [optional] 
**cancel_requested** | **bool** | Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] 
**create_time** | **str** | The time the operation was created. | [optional] 
**end_time** | **str** | The time the operation finished running. | [optional] 
**operation_type** | **str** | The operation type. | [optional] 
**request_resource** | **Dict[str, object]** | The original request that started the operation. | [optional] 
**source_token** | **str** | An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. | [optional] 
**stages** | [**List[GoogleCloudFunctionsV2Stage]**](GoogleCloudFunctionsV2Stage.md) | Mechanism for reporting in-progress stages | [optional] 
**status_detail** | **str** | Human-readable status of the operation, if any. | [optional] 
**target** | **str** | Server-defined resource path for the target of the operation. | [optional] 
**verb** | **str** | Name of the verb executed by the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_functions_v2_operation_metadata import GoogleCloudFunctionsV2OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudFunctionsV2OperationMetadata from a JSON string
google_cloud_functions_v2_operation_metadata_instance = GoogleCloudFunctionsV2OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudFunctionsV2OperationMetadata.to_json())

# convert the object into a dict
google_cloud_functions_v2_operation_metadata_dict = google_cloud_functions_v2_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudFunctionsV2OperationMetadata from a dict
google_cloud_functions_v2_operation_metadata_from_dict = GoogleCloudFunctionsV2OperationMetadata.from_dict(google_cloud_functions_v2_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


