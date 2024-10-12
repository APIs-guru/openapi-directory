# GoogleCloudApigeeV1ListEnvironmentResourcesResponse

Response for ListEnvironmentResources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_file** | [**List[GoogleCloudApigeeV1ResourceFile]**](GoogleCloudApigeeV1ResourceFile.md) | List of resources files. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_environment_resources_response import GoogleCloudApigeeV1ListEnvironmentResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListEnvironmentResourcesResponse from a JSON string
google_cloud_apigee_v1_list_environment_resources_response_instance = GoogleCloudApigeeV1ListEnvironmentResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListEnvironmentResourcesResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_environment_resources_response_dict = google_cloud_apigee_v1_list_environment_resources_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListEnvironmentResourcesResponse from a dict
google_cloud_apigee_v1_list_environment_resources_response_from_dict = GoogleCloudApigeeV1ListEnvironmentResourcesResponse.from_dict(google_cloud_apigee_v1_list_environment_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


