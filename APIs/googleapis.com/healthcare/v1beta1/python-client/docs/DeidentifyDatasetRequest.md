# DeidentifyDatasetRequest

Redacts identifying information from the specified dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**DeidentifyConfig**](DeidentifyConfig.md) |  | [optional] 
**destination_dataset** | **str** | Required. The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same location as the source dataset. De-identifying data across multiple locations is not supported. | [optional] 
**gcs_config_uri** | **str** | Cloud Storage location to read the JSON cloud.healthcare.deidentify.DeidentifyConfig from, overriding the default config. Must be of the form &#x60;gs://{bucket_id}/path/to/object&#x60;. The Cloud Storage location must grant the Cloud IAM role &#x60;roles/storage.objectViewer&#x60; to the project&#39;s Cloud Healthcare Service Agent service account. Only one of &#x60;config&#x60; and &#x60;gcs_config_uri&#x60; can be specified. | [optional] 

## Example

```python
from openapi_client.models.deidentify_dataset_request import DeidentifyDatasetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeidentifyDatasetRequest from a JSON string
deidentify_dataset_request_instance = DeidentifyDatasetRequest.from_json(json)
# print the JSON string representation of the object
print(DeidentifyDatasetRequest.to_json())

# convert the object into a dict
deidentify_dataset_request_dict = deidentify_dataset_request_instance.to_dict()
# create an instance of DeidentifyDatasetRequest from a dict
deidentify_dataset_request_from_dict = DeidentifyDatasetRequest.from_dict(deidentify_dataset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


