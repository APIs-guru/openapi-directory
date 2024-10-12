# GoogleCloudMlV1GetConfigResponse

Returns service account information associated with a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GoogleCloudMlV1Config**](GoogleCloudMlV1Config.md) |  | [optional] 
**service_account** | **str** | The service account Cloud ML uses to access resources in the project. | [optional] 
**service_account_project** | **str** | The project number for &#x60;service_account&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_get_config_response import GoogleCloudMlV1GetConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1GetConfigResponse from a JSON string
google_cloud_ml_v1_get_config_response_instance = GoogleCloudMlV1GetConfigResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1GetConfigResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_get_config_response_dict = google_cloud_ml_v1_get_config_response_instance.to_dict()
# create an instance of GoogleCloudMlV1GetConfigResponse from a dict
google_cloud_ml_v1_get_config_response_from_dict = GoogleCloudMlV1GetConfigResponse.from_dict(google_cloud_ml_v1_get_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


