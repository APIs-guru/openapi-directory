# UpdateTrustedIdProviderWithAccountParameters

The parameters used to update a trusted identity provider while updating a Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the trusted identity provider to update. | 
**properties** | [**UpdateTrustedIdProviderProperties**](UpdateTrustedIdProviderProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_trusted_id_provider_with_account_parameters import UpdateTrustedIdProviderWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTrustedIdProviderWithAccountParameters from a JSON string
update_trusted_id_provider_with_account_parameters_instance = UpdateTrustedIdProviderWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateTrustedIdProviderWithAccountParameters.to_json())

# convert the object into a dict
update_trusted_id_provider_with_account_parameters_dict = update_trusted_id_provider_with_account_parameters_instance.to_dict()
# create an instance of UpdateTrustedIdProviderWithAccountParameters from a dict
update_trusted_id_provider_with_account_parameters_from_dict = UpdateTrustedIdProviderWithAccountParameters.from_dict(update_trusted_id_provider_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


