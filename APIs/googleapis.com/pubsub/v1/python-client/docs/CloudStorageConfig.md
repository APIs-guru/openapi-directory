# CloudStorageConfig

Configuration for a Cloud Storage subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avro_config** | [**AvroConfig**](AvroConfig.md) |  | [optional] 
**bucket** | **str** | Required. User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like \&quot;gs://\&quot;. See the [bucket naming requirements] (https://cloud.google.com/storage/docs/buckets#naming). | [optional] 
**filename_prefix** | **str** | Optional. User-provided prefix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). | [optional] 
**filename_suffix** | **str** | Optional. User-provided suffix for Cloud Storage filename. See the [object naming requirements](https://cloud.google.com/storage/docs/objects#naming). Must not end in \&quot;/\&quot;. | [optional] 
**max_bytes** | **str** | Optional. The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB. The max_bytes limit may be exceeded in cases where messages are larger than the limit. | [optional] 
**max_duration** | **str** | Optional. The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription&#39;s acknowledgement deadline. | [optional] 
**service_account_email** | **str** | Optional. The service account to use to write to Cloud Storage. The subscription creator or updater that specifies this field must have &#x60;iam.serviceAccounts.actAs&#x60; permission on the service account. If not specified, the Pub/Sub [service agent](https://cloud.google.com/iam/docs/service-agents), service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used. | [optional] 
**state** | **str** | Output only. An output-only field that indicates whether or not the subscription can receive messages. | [optional] [readonly] 
**text_config** | **object** | Configuration for writing message data in text format. Message payloads will be written to files as raw text, separated by a newline. | [optional] 

## Example

```python
from openapi_client.models.cloud_storage_config import CloudStorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudStorageConfig from a JSON string
cloud_storage_config_instance = CloudStorageConfig.from_json(json)
# print the JSON string representation of the object
print(CloudStorageConfig.to_json())

# convert the object into a dict
cloud_storage_config_dict = cloud_storage_config_instance.to_dict()
# create an instance of CloudStorageConfig from a dict
cloud_storage_config_from_dict = CloudStorageConfig.from_dict(cloud_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


