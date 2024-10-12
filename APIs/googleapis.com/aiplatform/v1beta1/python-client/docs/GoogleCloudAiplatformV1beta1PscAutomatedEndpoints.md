# GoogleCloudAiplatformV1beta1PscAutomatedEndpoints

PscAutomatedEndpoints defines the output of the forwarding rule automatically created by each PscAutomationConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_address** | **str** | Ip Address created by the automated forwarding rule. | [optional] 
**network** | **str** | Corresponding network in pscAutomationConfigs. | [optional] 
**project_id** | **str** | Corresponding project_id in pscAutomationConfigs | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_psc_automated_endpoints import GoogleCloudAiplatformV1beta1PscAutomatedEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PscAutomatedEndpoints from a JSON string
google_cloud_aiplatform_v1beta1_psc_automated_endpoints_instance = GoogleCloudAiplatformV1beta1PscAutomatedEndpoints.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PscAutomatedEndpoints.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_psc_automated_endpoints_dict = google_cloud_aiplatform_v1beta1_psc_automated_endpoints_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PscAutomatedEndpoints from a dict
google_cloud_aiplatform_v1beta1_psc_automated_endpoints_from_dict = GoogleCloudAiplatformV1beta1PscAutomatedEndpoints.from_dict(google_cloud_aiplatform_v1beta1_psc_automated_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


