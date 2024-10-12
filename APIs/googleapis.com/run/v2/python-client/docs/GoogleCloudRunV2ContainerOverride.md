# GoogleCloudRunV2ContainerOverride

Per-container override specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Optional. Arguments to the entrypoint. Will replace existing args for override. | [optional] 
**clear_args** | **bool** | Optional. True if the intention is to clear out existing args list. | [optional] 
**env** | [**List[GoogleCloudRunV2EnvVar]**](GoogleCloudRunV2EnvVar.md) | List of environment variables to set in the container. Will be merged with existing env for override. | [optional] 
**name** | **str** | The name of the container specified as a DNS_LABEL. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_container_override import GoogleCloudRunV2ContainerOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ContainerOverride from a JSON string
google_cloud_run_v2_container_override_instance = GoogleCloudRunV2ContainerOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ContainerOverride.to_json())

# convert the object into a dict
google_cloud_run_v2_container_override_dict = google_cloud_run_v2_container_override_instance.to_dict()
# create an instance of GoogleCloudRunV2ContainerOverride from a dict
google_cloud_run_v2_container_override_from_dict = GoogleCloudRunV2ContainerOverride.from_dict(google_cloud_run_v2_container_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


