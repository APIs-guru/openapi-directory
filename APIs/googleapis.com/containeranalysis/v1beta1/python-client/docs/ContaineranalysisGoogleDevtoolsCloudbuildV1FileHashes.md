# ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes

Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1Hash]**](ContaineranalysisGoogleDevtoolsCloudbuildV1Hash.md) | Collection of file hashes. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_file_hashes import ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_file_hashes_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_file_hashes_dict = containeranalysis_google_devtools_cloudbuild_v1_file_hashes_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes from a dict
containeranalysis_google_devtools_cloudbuild_v1_file_hashes_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1FileHashes.from_dict(containeranalysis_google_devtools_cloudbuild_v1_file_hashes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


