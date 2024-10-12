# GoogleCloudApigeeV1ResourceFile

Metadata about a resource file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | ID of the resource file. | [optional] 
**type** | **str** | Resource file type. {{ resource_file_type }} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_resource_file import GoogleCloudApigeeV1ResourceFile

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ResourceFile from a JSON string
google_cloud_apigee_v1_resource_file_instance = GoogleCloudApigeeV1ResourceFile.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ResourceFile.to_json())

# convert the object into a dict
google_cloud_apigee_v1_resource_file_dict = google_cloud_apigee_v1_resource_file_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ResourceFile from a dict
google_cloud_apigee_v1_resource_file_from_dict = GoogleCloudApigeeV1ResourceFile.from_dict(google_cloud_apigee_v1_resource_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


