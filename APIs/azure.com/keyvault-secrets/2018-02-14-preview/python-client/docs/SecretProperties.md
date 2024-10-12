# SecretProperties

Properties of the secret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SecretAttributes**](SecretAttributes.md) |  | [optional] 
**content_type** | **str** | The content type of the secret. | [optional] 
**secret_uri** | **str** | The URI to retrieve the current version of the secret. | [optional] [readonly] 
**secret_uri_with_version** | **str** | The URI to retrieve the specific version of the secret. | [optional] [readonly] 
**value** | **str** | The value of the secret. NOTE: &#39;value&#39; will never be returned from the service, as APIs using this model are is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets. | [optional] 

## Example

```python
from openapi_client.models.secret_properties import SecretProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SecretProperties from a JSON string
secret_properties_instance = SecretProperties.from_json(json)
# print the JSON string representation of the object
print(SecretProperties.to_json())

# convert the object into a dict
secret_properties_dict = secret_properties_instance.to_dict()
# create an instance of SecretProperties from a dict
secret_properties_from_dict = SecretProperties.from_dict(secret_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


