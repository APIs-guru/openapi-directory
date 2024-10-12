# GoogleCloudRetailV2alphaOutputConfigGcsDestination

The Google Cloud Storage output destination configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri_prefix** | **str** | Required. The output uri prefix for saving output data to json files. Some mapping examples are as follows: output_uri_prefix sample output(assuming the object is foo.json) &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D; &#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D; gs://bucket/ gs://bucket/foo.json gs://bucket/folder/ gs://bucket/folder/foo.json gs://bucket/folder/item_ gs://bucket/folder/item_foo.json | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_output_config_gcs_destination import GoogleCloudRetailV2alphaOutputConfigGcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaOutputConfigGcsDestination from a JSON string
google_cloud_retail_v2alpha_output_config_gcs_destination_instance = GoogleCloudRetailV2alphaOutputConfigGcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaOutputConfigGcsDestination.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_output_config_gcs_destination_dict = google_cloud_retail_v2alpha_output_config_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaOutputConfigGcsDestination from a dict
google_cloud_retail_v2alpha_output_config_gcs_destination_from_dict = GoogleCloudRetailV2alphaOutputConfigGcsDestination.from_dict(google_cloud_retail_v2alpha_output_config_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


