# GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest

Request for Creating Cloud Function rpc call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_name** | **str** | The function name of CF to be created | [optional] 
**function_region** | **str** | The function region of CF to be created | [optional] 
**project_id** | **str** | Indicates the id of the GCP project that the function will be created in. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_create_cloud_function_request import GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest from a JSON string
google_cloud_integrations_v1alpha_create_cloud_function_request_instance = GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_create_cloud_function_request_dict = google_cloud_integrations_v1alpha_create_cloud_function_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest from a dict
google_cloud_integrations_v1alpha_create_cloud_function_request_from_dict = GoogleCloudIntegrationsV1alphaCreateCloudFunctionRequest.from_dict(google_cloud_integrations_v1alpha_create_cloud_function_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


