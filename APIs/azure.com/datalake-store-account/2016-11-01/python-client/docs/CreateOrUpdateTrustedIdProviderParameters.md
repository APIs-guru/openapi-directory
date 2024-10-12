# CreateOrUpdateTrustedIdProviderParameters

The parameters used to create a new trusted identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateOrUpdateTrustedIdProviderProperties**](CreateOrUpdateTrustedIdProviderProperties.md) |  | 

## Example

```python
from openapi_client.models.create_or_update_trusted_id_provider_parameters import CreateOrUpdateTrustedIdProviderParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateTrustedIdProviderParameters from a JSON string
create_or_update_trusted_id_provider_parameters_instance = CreateOrUpdateTrustedIdProviderParameters.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateTrustedIdProviderParameters.to_json())

# convert the object into a dict
create_or_update_trusted_id_provider_parameters_dict = create_or_update_trusted_id_provider_parameters_instance.to_dict()
# create an instance of CreateOrUpdateTrustedIdProviderParameters from a dict
create_or_update_trusted_id_provider_parameters_from_dict = CreateOrUpdateTrustedIdProviderParameters.from_dict(create_or_update_trusted_id_provider_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


