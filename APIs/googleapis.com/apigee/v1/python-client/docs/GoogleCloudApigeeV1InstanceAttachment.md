# GoogleCloudApigeeV1InstanceAttachment

InstanceAttachment represents the installation of an environment onto an instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Output only. Time the attachment was created in milliseconds since epoch. | [optional] [readonly] 
**environment** | **str** | ID of the attached environment. | [optional] 
**name** | **str** | Output only. ID of the attachment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_instance_attachment import GoogleCloudApigeeV1InstanceAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1InstanceAttachment from a JSON string
google_cloud_apigee_v1_instance_attachment_instance = GoogleCloudApigeeV1InstanceAttachment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1InstanceAttachment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_instance_attachment_dict = google_cloud_apigee_v1_instance_attachment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1InstanceAttachment from a dict
google_cloud_apigee_v1_instance_attachment_from_dict = GoogleCloudApigeeV1InstanceAttachment.from_dict(google_cloud_apigee_v1_instance_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


