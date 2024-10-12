# GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata

Metadata associated with the long running operation for Versions.CreateVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Name of the created version. Format: &#x60;projects//locations//agents//flows//versions/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_create_version_operation_metadata import GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata from a JSON string
google_cloud_dialogflow_cx_v3beta1_create_version_operation_metadata_instance = GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_create_version_operation_metadata_dict = google_cloud_dialogflow_cx_v3beta1_create_version_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata from a dict
google_cloud_dialogflow_cx_v3beta1_create_version_operation_metadata_from_dict = GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata.from_dict(google_cloud_dialogflow_cx_v3beta1_create_version_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


