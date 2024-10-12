# UpdateDataLakeAnalyticsAccountParameters

The parameters that can be used to update an existing Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateDataLakeAnalyticsAccountProperties**](UpdateDataLakeAnalyticsAccountProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 

## Example

```python
from openapi_client.models.update_data_lake_analytics_account_parameters import UpdateDataLakeAnalyticsAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataLakeAnalyticsAccountParameters from a JSON string
update_data_lake_analytics_account_parameters_instance = UpdateDataLakeAnalyticsAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateDataLakeAnalyticsAccountParameters.to_json())

# convert the object into a dict
update_data_lake_analytics_account_parameters_dict = update_data_lake_analytics_account_parameters_instance.to_dict()
# create an instance of UpdateDataLakeAnalyticsAccountParameters from a dict
update_data_lake_analytics_account_parameters_from_dict = UpdateDataLakeAnalyticsAccountParameters.from_dict(update_data_lake_analytics_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


