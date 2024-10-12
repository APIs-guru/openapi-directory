# GoogleCloudDocumentaiV1ProcessorVersionAlias

Contains the alias and the aliased resource name of processor version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | The alias in the form of &#x60;processor_version&#x60; resource name. | [optional] 
**processor_version** | **str** | The resource name of aliased processor version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_processor_version_alias import GoogleCloudDocumentaiV1ProcessorVersionAlias

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ProcessorVersionAlias from a JSON string
google_cloud_documentai_v1_processor_version_alias_instance = GoogleCloudDocumentaiV1ProcessorVersionAlias.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ProcessorVersionAlias.to_json())

# convert the object into a dict
google_cloud_documentai_v1_processor_version_alias_dict = google_cloud_documentai_v1_processor_version_alias_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ProcessorVersionAlias from a dict
google_cloud_documentai_v1_processor_version_alias_from_dict = GoogleCloudDocumentaiV1ProcessorVersionAlias.from_dict(google_cloud_documentai_v1_processor_version_alias_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


