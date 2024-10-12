# GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse

Response for Creating Cloud Function rpc call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger_url** | **str** | The trigger url that will be returned | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_create_cloud_function_response import GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse from a JSON string
google_cloud_integrations_v1alpha_create_cloud_function_response_instance = GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_create_cloud_function_response_dict = google_cloud_integrations_v1alpha_create_cloud_function_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse from a dict
google_cloud_integrations_v1alpha_create_cloud_function_response_from_dict = GoogleCloudIntegrationsV1alphaCreateCloudFunctionResponse.from_dict(google_cloud_integrations_v1alpha_create_cloud_function_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


