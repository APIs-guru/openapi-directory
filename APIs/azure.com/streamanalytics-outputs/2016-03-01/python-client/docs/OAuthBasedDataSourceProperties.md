# OAuthBasedDataSourceProperties

The properties that are associated with data sources that use OAuth as their authentication model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refresh_token** | **str** | A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests. | [optional] 
**token_user_display_name** | **str** | The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | [optional] 
**token_user_principal_name** | **str** | The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | [optional] 

## Example

```python
from openapi_client.models.o_auth_based_data_source_properties import OAuthBasedDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthBasedDataSourceProperties from a JSON string
o_auth_based_data_source_properties_instance = OAuthBasedDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(OAuthBasedDataSourceProperties.to_json())

# convert the object into a dict
o_auth_based_data_source_properties_dict = o_auth_based_data_source_properties_instance.to_dict()
# create an instance of OAuthBasedDataSourceProperties from a dict
o_auth_based_data_source_properties_from_dict = OAuthBasedDataSourceProperties.from_dict(o_auth_based_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


