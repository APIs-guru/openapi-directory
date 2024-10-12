# SecretManagerSource

Configuration for secrets stored in Google Secret Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_version** | **str** | Required. The name of the Secret Version containing the encryption key in the following format: &#x60;projects/{project}/secrets/{secret_id}/versions/{version_number}&#x60; Note that only numbered versions are supported. Aliases like \&quot;latest\&quot; are not supported. | [optional] 

## Example

```python
from openapi_client.models.secret_manager_source import SecretManagerSource

# TODO update the JSON string below
json = "{}"
# create an instance of SecretManagerSource from a JSON string
secret_manager_source_instance = SecretManagerSource.from_json(json)
# print the JSON string representation of the object
print(SecretManagerSource.to_json())

# convert the object into a dict
secret_manager_source_dict = secret_manager_source_instance.to_dict()
# create an instance of SecretManagerSource from a dict
secret_manager_source_from_dict = SecretManagerSource.from_dict(secret_manager_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


