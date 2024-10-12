# SecretProperties

Properties of the key backing a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The media type (MIME type). | [optional] 

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


