# ApigatewayOperationMetadata

Represents the metadata of the long-running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | Output only. API version used to start the operation. | [optional] [readonly] 
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**diagnostics** | [**List[ApigatewayOperationMetadataDiagnostic]**](ApigatewayOperationMetadataDiagnostic.md) | Output only. Diagnostics generated during processing of configuration source files. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**requested_cancellation** | **bool** | Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] [readonly] 
**status_message** | **str** | Output only. Human-readable status of the operation, if any. | [optional] [readonly] 
**target** | **str** | Output only. Server-defined resource path for the target of the operation. | [optional] [readonly] 
**verb** | **str** | Output only. Name of the verb executed by the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.apigateway_operation_metadata import ApigatewayOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayOperationMetadata from a JSON string
apigateway_operation_metadata_instance = ApigatewayOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ApigatewayOperationMetadata.to_json())

# convert the object into a dict
apigateway_operation_metadata_dict = apigateway_operation_metadata_instance.to_dict()
# create an instance of ApigatewayOperationMetadata from a dict
apigateway_operation_metadata_from_dict = ApigatewayOperationMetadata.from_dict(apigateway_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


