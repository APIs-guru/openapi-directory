# GoogleCloudApigeeV1DocumentationFile

Documentation file contents for a catalog item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | Required. The file contents. The max size is 4 MB. | [optional] 
**display_name** | **str** | Required. A display name for the file, shown in the management UI. Max length is 255 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_documentation_file import GoogleCloudApigeeV1DocumentationFile

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DocumentationFile from a JSON string
google_cloud_apigee_v1_documentation_file_instance = GoogleCloudApigeeV1DocumentationFile.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DocumentationFile.to_json())

# convert the object into a dict
google_cloud_apigee_v1_documentation_file_dict = google_cloud_apigee_v1_documentation_file_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DocumentationFile from a dict
google_cloud_apigee_v1_documentation_file_from_dict = GoogleCloudApigeeV1DocumentationFile.from_dict(google_cloud_apigee_v1_documentation_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


