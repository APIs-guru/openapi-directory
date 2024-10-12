# DataLakeStoreAccountInformationListResult

Data Lake Store account list information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[DataLakeStoreAccountInformation]**](DataLakeStoreAccountInformation.md) | The results of the list operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_information_list_result import DataLakeStoreAccountInformationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountInformationListResult from a JSON string
data_lake_store_account_information_list_result_instance = DataLakeStoreAccountInformationListResult.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountInformationListResult.to_json())

# convert the object into a dict
data_lake_store_account_information_list_result_dict = data_lake_store_account_information_list_result_instance.to_dict()
# create an instance of DataLakeStoreAccountInformationListResult from a dict
data_lake_store_account_information_list_result_from_dict = DataLakeStoreAccountInformationListResult.from_dict(data_lake_store_account_information_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


