# GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata

Metadata for all operations used and required for all operations that created by Container Analysis Providers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time this operation was created. | [optional] 
**end_time** | **str** | Output only. The time that this operation was marked completed or failed. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_containeranalysis_v1alpha1_operation_metadata import GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata from a JSON string
google_devtools_containeranalysis_v1alpha1_operation_metadata_instance = GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata.to_json())

# convert the object into a dict
google_devtools_containeranalysis_v1alpha1_operation_metadata_dict = google_devtools_containeranalysis_v1alpha1_operation_metadata_instance.to_dict()
# create an instance of GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata from a dict
google_devtools_containeranalysis_v1alpha1_operation_metadata_from_dict = GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata.from_dict(google_devtools_containeranalysis_v1alpha1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


