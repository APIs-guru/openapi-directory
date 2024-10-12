# GoogleCloudIntegrationsV1alphaGenerateTokenResponse

Returns success or error message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The message that notifies the user if the request succeeded or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_generate_token_response import GoogleCloudIntegrationsV1alphaGenerateTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaGenerateTokenResponse from a JSON string
google_cloud_integrations_v1alpha_generate_token_response_instance = GoogleCloudIntegrationsV1alphaGenerateTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaGenerateTokenResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_generate_token_response_dict = google_cloud_integrations_v1alpha_generate_token_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaGenerateTokenResponse from a dict
google_cloud_integrations_v1alpha_generate_token_response_from_dict = GoogleCloudIntegrationsV1alphaGenerateTokenResponse.from_dict(google_cloud_integrations_v1alpha_generate_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


