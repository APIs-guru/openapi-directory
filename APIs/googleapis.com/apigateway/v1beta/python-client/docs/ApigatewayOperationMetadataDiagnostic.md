# ApigatewayOperationMetadataDiagnostic

Diagnostic information from configuration processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the diagnostic. | [optional] 
**message** | **str** | The diagnostic message. | [optional] 

## Example

```python
from openapi_client.models.apigateway_operation_metadata_diagnostic import ApigatewayOperationMetadataDiagnostic

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayOperationMetadataDiagnostic from a JSON string
apigateway_operation_metadata_diagnostic_instance = ApigatewayOperationMetadataDiagnostic.from_json(json)
# print the JSON string representation of the object
print(ApigatewayOperationMetadataDiagnostic.to_json())

# convert the object into a dict
apigateway_operation_metadata_diagnostic_dict = apigateway_operation_metadata_diagnostic_instance.to_dict()
# create an instance of ApigatewayOperationMetadataDiagnostic from a dict
apigateway_operation_metadata_diagnostic_from_dict = ApigatewayOperationMetadataDiagnostic.from_dict(apigateway_operation_metadata_diagnostic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


