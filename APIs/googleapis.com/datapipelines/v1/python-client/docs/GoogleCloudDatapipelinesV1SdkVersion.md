# GoogleCloudDatapipelinesV1SdkVersion

The version of the SDK used to run the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdk_support_status** | **str** | The support status for this SDK version. | [optional] 
**version** | **str** | The version of the SDK used to run the job. | [optional] 
**version_display_name** | **str** | A readable string describing the version of the SDK. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datapipelines_v1_sdk_version import GoogleCloudDatapipelinesV1SdkVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatapipelinesV1SdkVersion from a JSON string
google_cloud_datapipelines_v1_sdk_version_instance = GoogleCloudDatapipelinesV1SdkVersion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatapipelinesV1SdkVersion.to_json())

# convert the object into a dict
google_cloud_datapipelines_v1_sdk_version_dict = google_cloud_datapipelines_v1_sdk_version_instance.to_dict()
# create an instance of GoogleCloudDatapipelinesV1SdkVersion from a dict
google_cloud_datapipelines_v1_sdk_version_from_dict = GoogleCloudDatapipelinesV1SdkVersion.from_dict(google_cloud_datapipelines_v1_sdk_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


