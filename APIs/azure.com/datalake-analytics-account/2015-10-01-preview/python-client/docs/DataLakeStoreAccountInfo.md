# DataLakeStoreAccountInfo

Data Lake Store account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the account name of the Data Lake Store account. | 
**properties** | [**DataLakeStoreAccountInfoProperties**](DataLakeStoreAccountInfoProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_lake_store_account_info import DataLakeStoreAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountInfo from a JSON string
data_lake_store_account_info_instance = DataLakeStoreAccountInfo.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountInfo.to_json())

# convert the object into a dict
data_lake_store_account_info_dict = data_lake_store_account_info_instance.to_dict()
# create an instance of DataLakeStoreAccountInfo from a dict
data_lake_store_account_info_from_dict = DataLakeStoreAccountInfo.from_dict(data_lake_store_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


