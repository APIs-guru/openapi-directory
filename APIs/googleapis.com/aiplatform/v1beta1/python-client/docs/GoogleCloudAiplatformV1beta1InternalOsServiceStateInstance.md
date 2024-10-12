# GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance

Request message for [InternalOsServiceStateInstance].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | Required. internal service name. | [optional] 
**service_state** | **str** | Required. internal service state. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_internal_os_service_state_instance import GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance from a JSON string
google_cloud_aiplatform_v1beta1_internal_os_service_state_instance_instance = GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_internal_os_service_state_instance_dict = google_cloud_aiplatform_v1beta1_internal_os_service_state_instance_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance from a dict
google_cloud_aiplatform_v1beta1_internal_os_service_state_instance_from_dict = GoogleCloudAiplatformV1beta1InternalOsServiceStateInstance.from_dict(google_cloud_aiplatform_v1beta1_internal_os_service_state_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


