# DataLakeStoreAccountInfoProperties

Data Lake Store account properties information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **str** | the optional suffix for the Data Lake Store account. | [optional] 

## Example

```python
from openapi_client.models.data_lake_store_account_info_properties import DataLakeStoreAccountInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountInfoProperties from a JSON string
data_lake_store_account_info_properties_instance = DataLakeStoreAccountInfoProperties.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountInfoProperties.to_json())

# convert the object into a dict
data_lake_store_account_info_properties_dict = data_lake_store_account_info_properties_instance.to_dict()
# create an instance of DataLakeStoreAccountInfoProperties from a dict
data_lake_store_account_info_properties_from_dict = DataLakeStoreAccountInfoProperties.from_dict(data_lake_store_account_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


