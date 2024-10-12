# CreateDataLakeAnalyticsAccountParameters

The parameters to use for creating a Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The resource location. | 
**properties** | [**CreateDataLakeAnalyticsAccountProperties**](CreateDataLakeAnalyticsAccountProperties.md) |  | 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 

## Example

```python
from openapi_client.models.create_data_lake_analytics_account_parameters import CreateDataLakeAnalyticsAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataLakeAnalyticsAccountParameters from a JSON string
create_data_lake_analytics_account_parameters_instance = CreateDataLakeAnalyticsAccountParameters.from_json(json)
# print the JSON string representation of the object
print(CreateDataLakeAnalyticsAccountParameters.to_json())

# convert the object into a dict
create_data_lake_analytics_account_parameters_dict = create_data_lake_analytics_account_parameters_instance.to_dict()
# create an instance of CreateDataLakeAnalyticsAccountParameters from a dict
create_data_lake_analytics_account_parameters_from_dict = CreateDataLakeAnalyticsAccountParameters.from_dict(create_data_lake_analytics_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


