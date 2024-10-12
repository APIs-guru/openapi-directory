# GoogleCloudAiplatformV1beta1NetworkSpec

Network spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_internet_access** | **bool** | Whether to enable public internet access. Default false. | [optional] 
**network** | **str** | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) | [optional] 
**subnetwork** | **str** | The name of the subnet that this instance is in. Format: &#x60;projects/{project_id_or_number}/regions/{region}/subnetworks/{subnetwork_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_network_spec import GoogleCloudAiplatformV1beta1NetworkSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1NetworkSpec from a JSON string
google_cloud_aiplatform_v1beta1_network_spec_instance = GoogleCloudAiplatformV1beta1NetworkSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1NetworkSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_network_spec_dict = google_cloud_aiplatform_v1beta1_network_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1NetworkSpec from a dict
google_cloud_aiplatform_v1beta1_network_spec_from_dict = GoogleCloudAiplatformV1beta1NetworkSpec.from_dict(google_cloud_aiplatform_v1beta1_network_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


