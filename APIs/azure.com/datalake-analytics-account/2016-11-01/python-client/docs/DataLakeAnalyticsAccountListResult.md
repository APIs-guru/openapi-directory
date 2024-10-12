# DataLakeAnalyticsAccountListResult

Data Lake Analytics account list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[DataLakeAnalyticsAccountBasic]**](DataLakeAnalyticsAccountBasic.md) | The results of the list operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_analytics_account_list_result import DataLakeAnalyticsAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeAnalyticsAccountListResult from a JSON string
data_lake_analytics_account_list_result_instance = DataLakeAnalyticsAccountListResult.from_json(json)
# print the JSON string representation of the object
print(DataLakeAnalyticsAccountListResult.to_json())

# convert the object into a dict
data_lake_analytics_account_list_result_dict = data_lake_analytics_account_list_result_instance.to_dict()
# create an instance of DataLakeAnalyticsAccountListResult from a dict
data_lake_analytics_account_list_result_from_dict = DataLakeAnalyticsAccountListResult.from_dict(data_lake_analytics_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


