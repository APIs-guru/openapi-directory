# ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets

Secrets and secret environment variables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret]**](ContaineranalysisGoogleDevtoolsCloudbuildV1InlineSecret.md) | Secrets encrypted with KMS key and the associated secret environment variable. | [optional] 
**secret_manager** | [**List[ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret]**](ContaineranalysisGoogleDevtoolsCloudbuildV1SecretManagerSecret.md) | Secrets in Secret Manager and associated secret environment variable. | [optional] 

## Example

```python
from openapi_client.models.containeranalysis_google_devtools_cloudbuild_v1_secrets import ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets

# TODO update the JSON string below
json = "{}"
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets from a JSON string
containeranalysis_google_devtools_cloudbuild_v1_secrets_instance = ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets.from_json(json)
# print the JSON string representation of the object
print(ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets.to_json())

# convert the object into a dict
containeranalysis_google_devtools_cloudbuild_v1_secrets_dict = containeranalysis_google_devtools_cloudbuild_v1_secrets_instance.to_dict()
# create an instance of ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets from a dict
containeranalysis_google_devtools_cloudbuild_v1_secrets_from_dict = ContaineranalysisGoogleDevtoolsCloudbuildV1Secrets.from_dict(containeranalysis_google_devtools_cloudbuild_v1_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


