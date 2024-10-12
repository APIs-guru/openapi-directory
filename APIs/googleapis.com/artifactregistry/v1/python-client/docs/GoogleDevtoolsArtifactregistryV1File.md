# GoogleDevtoolsArtifactregistryV1File

Files store content that is potentially associated with Packages or Versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the File was created. | [optional] [readonly] 
**fetch_time** | **str** | Output only. The time when the last attempt to refresh the file&#39;s data was made. Only set when the repository is remote. | [optional] [readonly] 
**hashes** | [**List[Hash]**](Hash.md) | The hashes of the file content. | [optional] 
**name** | **str** | The name of the file, for example: \&quot;projects/p1/locations/us-central1/repositories/repo1/files/a%2Fb%2Fc.txt\&quot;. If the file ID part contains slashes, they are escaped. | [optional] 
**owner** | **str** | The name of the Package or Version that owns this file, if any. | [optional] 
**size_bytes** | **str** | The size of the File in bytes. | [optional] 
**update_time** | **str** | Output only. The time when the File was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_devtools_artifactregistry_v1_file import GoogleDevtoolsArtifactregistryV1File

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsArtifactregistryV1File from a JSON string
google_devtools_artifactregistry_v1_file_instance = GoogleDevtoolsArtifactregistryV1File.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsArtifactregistryV1File.to_json())

# convert the object into a dict
google_devtools_artifactregistry_v1_file_dict = google_devtools_artifactregistry_v1_file_instance.to_dict()
# create an instance of GoogleDevtoolsArtifactregistryV1File from a dict
google_devtools_artifactregistry_v1_file_from_dict = GoogleDevtoolsArtifactregistryV1File.from_dict(google_devtools_artifactregistry_v1_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


