# TrustedIdProviderProperties

The trusted identity provider properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_provider** | **str** | The URL of this trusted identity provider. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trusted_id_provider_properties import TrustedIdProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TrustedIdProviderProperties from a JSON string
trusted_id_provider_properties_instance = TrustedIdProviderProperties.from_json(json)
# print the JSON string representation of the object
print(TrustedIdProviderProperties.to_json())

# convert the object into a dict
trusted_id_provider_properties_dict = trusted_id_provider_properties_instance.to_dict()
# create an instance of TrustedIdProviderProperties from a dict
trusted_id_provider_properties_from_dict = TrustedIdProviderProperties.from_dict(trusted_id_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


