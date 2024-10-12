# CreateOrUpdateTrustedIdProviderProperties

The trusted identity provider properties to use when creating a new trusted identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_provider** | **str** | The URL of this trusted identity provider. | 

## Example

```python
from openapi_client.models.create_or_update_trusted_id_provider_properties import CreateOrUpdateTrustedIdProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateTrustedIdProviderProperties from a JSON string
create_or_update_trusted_id_provider_properties_instance = CreateOrUpdateTrustedIdProviderProperties.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateTrustedIdProviderProperties.to_json())

# convert the object into a dict
create_or_update_trusted_id_provider_properties_dict = create_or_update_trusted_id_provider_properties_instance.to_dict()
# create an instance of CreateOrUpdateTrustedIdProviderProperties from a dict
create_or_update_trusted_id_provider_properties_from_dict = CreateOrUpdateTrustedIdProviderProperties.from_dict(create_or_update_trusted_id_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


