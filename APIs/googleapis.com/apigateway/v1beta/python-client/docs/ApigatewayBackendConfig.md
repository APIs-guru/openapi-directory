# ApigatewayBackendConfig

Configuration for all backends.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_service_account** | **str** | Google Cloud IAM service account used to sign OIDC tokens for backends that have authentication configured (https://cloud.google.com/service-infrastructure/docs/service-management/reference/rest/v1/services.configs#backend). This may either be the Service Account&#39;s email (i.e. \&quot;{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com\&quot;) or its full resource name (i.e. \&quot;projects/{PROJECT}/accounts/{UNIQUE_ID}\&quot;). This is most often used when the backend is a GCP resource such as a Cloud Run Service or an IAP-secured service. Note that this token is always sent as an authorization header bearer token. The audience of the OIDC token is configured in the associated Service Config in the BackendRule option (https://github.com/googleapis/googleapis/blob/master/google/api/backend.proto#L125). | [optional] 

## Example

```python
from openapi_client.models.apigateway_backend_config import ApigatewayBackendConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayBackendConfig from a JSON string
apigateway_backend_config_instance = ApigatewayBackendConfig.from_json(json)
# print the JSON string representation of the object
print(ApigatewayBackendConfig.to_json())

# convert the object into a dict
apigateway_backend_config_dict = apigateway_backend_config_instance.to_dict()
# create an instance of ApigatewayBackendConfig from a dict
apigateway_backend_config_from_dict = ApigatewayBackendConfig.from_dict(apigateway_backend_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


