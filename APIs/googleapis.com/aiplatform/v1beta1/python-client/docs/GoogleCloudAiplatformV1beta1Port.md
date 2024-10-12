# GoogleCloudAiplatformV1beta1Port

Represents a network port in a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_port** | **int** | The number of the port to expose on the pod&#39;s IP address. Must be a valid port number, between 1 and 65535 inclusive. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_port import GoogleCloudAiplatformV1beta1Port

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Port from a JSON string
google_cloud_aiplatform_v1beta1_port_instance = GoogleCloudAiplatformV1beta1Port.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Port.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_port_dict = google_cloud_aiplatform_v1beta1_port_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Port from a dict
google_cloud_aiplatform_v1beta1_port_from_dict = GoogleCloudAiplatformV1beta1Port.from_dict(google_cloud_aiplatform_v1beta1_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


