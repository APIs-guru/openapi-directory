# GoogleCloudRunV2ResourceRequirements

ResourceRequirements describes the compute resource requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_idle** | **bool** | Determines whether CPU is only allocated during requests (true by default). However, if ResourceRequirements is set, the caller must explicitly set this field to true to preserve the default behavior. | [optional] 
**limits** | **Dict[str, str]** | Only &#x60;memory&#x60; and &#x60;cpu&#x60; keys in the map are supported. Notes: * The only supported values for CPU are &#39;1&#39;, &#39;2&#39;, &#39;4&#39;, and &#39;8&#39;. Setting 4 CPU requires at least 2Gi of memory. For more information, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported &#39;memory&#39; values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits | [optional] 
**startup_cpu_boost** | **bool** | Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_resource_requirements import GoogleCloudRunV2ResourceRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ResourceRequirements from a JSON string
google_cloud_run_v2_resource_requirements_instance = GoogleCloudRunV2ResourceRequirements.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ResourceRequirements.to_json())

# convert the object into a dict
google_cloud_run_v2_resource_requirements_dict = google_cloud_run_v2_resource_requirements_instance.to_dict()
# create an instance of GoogleCloudRunV2ResourceRequirements from a dict
google_cloud_run_v2_resource_requirements_from_dict = GoogleCloudRunV2ResourceRequirements.from_dict(google_cloud_run_v2_resource_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


