# PopulateVersionFilesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_required_hashes** | **List[str]** | The content hashes of the specified files that need to be uploaded to the specified URL. | [optional] 
**upload_url** | **str** | The URL to which the files should be uploaded, in the format: \&quot;https://upload-firebasehosting.googleapis.com/upload/sites/SITE_ID /versions/VERSION_ID/files\&quot; Perform a multipart &#x60;POST&#x60; of the Gzipped file contents to the URL using a forward slash and the hash of the file appended to the end. | [optional] 

## Example

```python
from openapi_client.models.populate_version_files_response import PopulateVersionFilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PopulateVersionFilesResponse from a JSON string
populate_version_files_response_instance = PopulateVersionFilesResponse.from_json(json)
# print the JSON string representation of the object
print(PopulateVersionFilesResponse.to_json())

# convert the object into a dict
populate_version_files_response_dict = populate_version_files_response_instance.to_dict()
# create an instance of PopulateVersionFilesResponse from a dict
populate_version_files_response_from_dict = PopulateVersionFilesResponse.from_dict(populate_version_files_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


