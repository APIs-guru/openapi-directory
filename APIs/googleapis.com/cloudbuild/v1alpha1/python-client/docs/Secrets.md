# Secrets

Secrets and secret environment variables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline** | [**List[InlineSecret]**](InlineSecret.md) | Secrets encrypted with KMS key and the associated secret environment variable. | [optional] 
**secret_manager** | [**List[SecretManagerSecret]**](SecretManagerSecret.md) | Secrets in Secret Manager and associated secret environment variable. | [optional] 

## Example

```python
from openapi_client.models.secrets import Secrets

# TODO update the JSON string below
json = "{}"
# create an instance of Secrets from a JSON string
secrets_instance = Secrets.from_json(json)
# print the JSON string representation of the object
print(Secrets.to_json())

# convert the object into a dict
secrets_dict = secrets_instance.to_dict()
# create an instance of Secrets from a dict
secrets_from_dict = Secrets.from_dict(secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


