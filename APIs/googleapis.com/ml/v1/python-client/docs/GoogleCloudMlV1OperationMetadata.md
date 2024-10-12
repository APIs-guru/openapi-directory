# GoogleCloudMlV1OperationMetadata

Represents the metadata of the long-running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time the operation was submitted. | [optional] 
**end_time** | **str** | The time operation processing completed. | [optional] 
**is_cancellation_requested** | **bool** | Indicates whether a request to cancel this operation has been made. | [optional] 
**labels** | **Dict[str, str]** | The user labels, inherited from the model or the model version being operated on. | [optional] 
**model_name** | **str** | Contains the name of the model associated with the operation. | [optional] 
**operation_type** | **str** | The operation type. | [optional] 
**project_number** | **str** | Contains the project number associated with the operation. | [optional] 
**start_time** | **str** | The time operation processing started. | [optional] 
**version** | [**GoogleCloudMlV1Version**](GoogleCloudMlV1Version.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_operation_metadata import GoogleCloudMlV1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1OperationMetadata from a JSON string
google_cloud_ml_v1_operation_metadata_instance = GoogleCloudMlV1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1OperationMetadata.to_json())

# convert the object into a dict
google_cloud_ml_v1_operation_metadata_dict = google_cloud_ml_v1_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudMlV1OperationMetadata from a dict
google_cloud_ml_v1_operation_metadata_from_dict = GoogleCloudMlV1OperationMetadata.from_dict(google_cloud_ml_v1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


