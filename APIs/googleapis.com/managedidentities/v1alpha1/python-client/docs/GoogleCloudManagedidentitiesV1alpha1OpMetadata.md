# GoogleCloudManagedidentitiesV1alpha1OpMetadata

Represents the metadata of the long-running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | Output only. API version used to start the operation. | [optional] [readonly] 
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 
**requested_cancellation** | **bool** | Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] [readonly] 
**target** | **str** | Output only. Server-defined resource path for the target of the operation. | [optional] [readonly] 
**verb** | **str** | Output only. Name of the verb executed by the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_managedidentities_v1alpha1_op_metadata import GoogleCloudManagedidentitiesV1alpha1OpMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudManagedidentitiesV1alpha1OpMetadata from a JSON string
google_cloud_managedidentities_v1alpha1_op_metadata_instance = GoogleCloudManagedidentitiesV1alpha1OpMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudManagedidentitiesV1alpha1OpMetadata.to_json())

# convert the object into a dict
google_cloud_managedidentities_v1alpha1_op_metadata_dict = google_cloud_managedidentities_v1alpha1_op_metadata_instance.to_dict()
# create an instance of GoogleCloudManagedidentitiesV1alpha1OpMetadata from a dict
google_cloud_managedidentities_v1alpha1_op_metadata_from_dict = GoogleCloudManagedidentitiesV1alpha1OpMetadata.from_dict(google_cloud_managedidentities_v1alpha1_op_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


