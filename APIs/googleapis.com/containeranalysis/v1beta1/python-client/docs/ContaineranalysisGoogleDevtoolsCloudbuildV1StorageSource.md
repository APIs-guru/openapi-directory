# ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource

Location of the source in an archive file in Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). | [optional] 
**generation** | **str** | Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. | [optional] 
**object** | **str** | Cloud Storage object containing the source. This object must be a zipped (&#x60;.zip&#x60;) or gzipped archive file (&#x60;.tar.gz&#x60;) containing source to build. | [optional] 
**source_fetcher** | **str** | Optional. Option to specify the tool to fetch the source file for the build. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_storage_source import ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_storage_source_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_storage_source_dict = containeranalysis_google_devtools_cloudbuild_v1_storage_source_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource from a dict
containeranalysis_google_devtools_cloudbuild_v1_storage_source_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1StorageSource.from_dict(containeranalysis_google_devtools_cloudbuild_v1_storage_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


