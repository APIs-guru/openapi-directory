# PowerBIOutputDataSourceProperties

The properties that are associated with a Power BI output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests. | [optional] 
**group_id** | **str** | The ID of the Power BI group. | [optional] 
**group_name** | **str** | The name of the Power BI group. Use this property to help remember which specific Power BI group id was used. | [optional] 
**table** | **str** | The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests. | [optional] 
**refresh_token** | **str** | A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests. | [optional] 
**token_user_display_name** | **str** | The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | [optional] 
**token_user_principal_name** | **str** | The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | [optional] 

## Example

```python
from openapi_client.models.power_bi_output_data_source_properties import PowerBIOutputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PowerBIOutputDataSourceProperties from a JSON string
power_bi_output_data_source_properties_instance = PowerBIOutputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(PowerBIOutputDataSourceProperties.to_json())

# convert the object into a dict
power_bi_output_data_source_properties_dict = power_bi_output_data_source_properties_instance.to_dict()
# create an instance of PowerBIOutputDataSourceProperties from a dict
power_bi_output_data_source_properties_from_dict = PowerBIOutputDataSourceProperties.from_dict(power_bi_output_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


