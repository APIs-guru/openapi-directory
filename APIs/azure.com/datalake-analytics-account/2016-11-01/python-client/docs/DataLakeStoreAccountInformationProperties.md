# DataLakeStoreAccountInformationProperties

The Data Lake Store account properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **str** | The optional suffix for the Data Lake Store account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_information_properties import DataLakeStoreAccountInformationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountInformationProperties from a JSON string
data_lake_store_account_information_properties_instance = DataLakeStoreAccountInformationProperties.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountInformationProperties.to_json())

# convert the object into a dict
data_lake_store_account_information_properties_dict = data_lake_store_account_information_properties_instance.to_dict()
# create an instance of DataLakeStoreAccountInformationProperties from a dict
data_lake_store_account_information_properties_from_dict = DataLakeStoreAccountInformationProperties.from_dict(data_lake_store_account_information_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


