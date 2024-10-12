# GoogleCloudDataplexV1EnvironmentInfrastructureSpec

Configuration for the underlying infrastructure used to run workloads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute** | [**GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources**](GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources.md) |  | [optional] 
**os_image** | [**GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime**](GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_environment_infrastructure_spec import GoogleCloudDataplexV1EnvironmentInfrastructureSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EnvironmentInfrastructureSpec from a JSON string
google_cloud_dataplex_v1_environment_infrastructure_spec_instance = GoogleCloudDataplexV1EnvironmentInfrastructureSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EnvironmentInfrastructureSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_environment_infrastructure_spec_dict = google_cloud_dataplex_v1_environment_infrastructure_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EnvironmentInfrastructureSpec from a dict
google_cloud_dataplex_v1_environment_infrastructure_spec_from_dict = GoogleCloudDataplexV1EnvironmentInfrastructureSpec.from_dict(google_cloud_dataplex_v1_environment_infrastructure_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


