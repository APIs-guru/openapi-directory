# CreateTrustedIdProviderWithAccountParameters

The parameters used to create a new trusted identity provider while creating a new Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the trusted identity provider to create. | 
**properties** | [**CreateOrUpdateTrustedIdProviderProperties**](CreateOrUpdateTrustedIdProviderProperties.md) |  | 

## Example

```python
from openapi_client.models.create_trusted_id_provider_with_account_parameters import CreateTrustedIdProviderWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTrustedIdProviderWithAccountParameters from a JSON string
create_trusted_id_provider_with_account_parameters_instance = CreateTrustedIdProviderWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(CreateTrustedIdProviderWithAccountParameters.to_json())

# convert the object into a dict
create_trusted_id_provider_with_account_parameters_dict = create_trusted_id_provider_with_account_parameters_instance.to_dict()
# create an instance of CreateTrustedIdProviderWithAccountParameters from a dict
create_trusted_id_provider_with_account_parameters_from_dict = CreateTrustedIdProviderWithAccountParameters.from_dict(create_trusted_id_provider_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


