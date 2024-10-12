# PopulateVersionFilesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **Dict[str, str]** | A set of file paths to the hashes corresponding to assets that should be added to the version. A file path to an empty hash will remove the path from the version. Calculate a hash by Gzipping the file then taking the SHA256 hash of the newly compressed file. | [optional] 

## Example

```python
from openapi_client.models.populate_version_files_request import PopulateVersionFilesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PopulateVersionFilesRequest from a JSON string
populate_version_files_request_instance = PopulateVersionFilesRequest.from_json(json)
# print the JSON string representation of the object
print(PopulateVersionFilesRequest.to_json())

# convert the object into a dict
populate_version_files_request_dict = populate_version_files_request_instance.to_dict()
# create an instance of PopulateVersionFilesRequest from a dict
populate_version_files_request_from_dict = PopulateVersionFilesRequest.from_dict(populate_version_files_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


