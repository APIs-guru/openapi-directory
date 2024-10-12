# GoogleCloudAiplatformV1NotebookEucConfig

The euc configuration of NotebookRuntimeTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bypass_actas_check** | **bool** | Output only. Whether ActAs check is bypassed for service account attached to the VM. If false, we need ActAs check for the default Compute Engine Service account. When a Runtime is created, a VM is allocated using Default Compute Engine Service Account. Any user requesting to use this Runtime requires Service Account User (ActAs) permission over this SA. If true, Runtime owner is using EUC and does not require the above permission as VM no longer use default Compute Engine SA, but a P4SA. | [optional] [readonly] 
**euc_disabled** | **bool** | Input only. Whether EUC is disabled in this NotebookRuntimeTemplate. In proto3, the default value of a boolean is false. In this way, by default EUC will be enabled for NotebookRuntimeTemplate. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_notebook_euc_config import GoogleCloudAiplatformV1NotebookEucConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1NotebookEucConfig from a JSON string
google_cloud_aiplatform_v1_notebook_euc_config_instance = GoogleCloudAiplatformV1NotebookEucConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1NotebookEucConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_notebook_euc_config_dict = google_cloud_aiplatform_v1_notebook_euc_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1NotebookEucConfig from a dict
google_cloud_aiplatform_v1_notebook_euc_config_from_dict = GoogleCloudAiplatformV1NotebookEucConfig.from_dict(google_cloud_aiplatform_v1_notebook_euc_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


