# UpdateTrustedIdProviderProperties

The trusted identity provider properties to use when updating a trusted identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_provider** | **str** | The URL of this trusted identity provider. | [optional] 

## Example

```python
from openapi_client.models.update_trusted_id_provider_properties import UpdateTrustedIdProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTrustedIdProviderProperties from a JSON string
update_trusted_id_provider_properties_instance = UpdateTrustedIdProviderProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateTrustedIdProviderProperties.to_json())

# convert the object into a dict
update_trusted_id_provider_properties_dict = update_trusted_id_provider_properties_instance.to_dict()
# create an instance of UpdateTrustedIdProviderProperties from a dict
update_trusted_id_provider_properties_from_dict = UpdateTrustedIdProviderProperties.from_dict(update_trusted_id_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


