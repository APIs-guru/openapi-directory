# UpdateTrustedIdProviderParameters

The parameters used to update a trusted identity provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateTrustedIdProviderProperties**](UpdateTrustedIdProviderProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_trusted_id_provider_parameters import UpdateTrustedIdProviderParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTrustedIdProviderParameters from a JSON string
update_trusted_id_provider_parameters_instance = UpdateTrustedIdProviderParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateTrustedIdProviderParameters.to_json())

# convert the object into a dict
update_trusted_id_provider_parameters_dict = update_trusted_id_provider_parameters_instance.to_dict()
# create an instance of UpdateTrustedIdProviderParameters from a dict
update_trusted_id_provider_parameters_from_dict = UpdateTrustedIdProviderParameters.from_dict(update_trusted_id_provider_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


