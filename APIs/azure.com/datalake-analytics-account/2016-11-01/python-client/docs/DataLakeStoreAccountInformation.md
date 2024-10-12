# DataLakeStoreAccountInformation

Data Lake Store account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataLakeStoreAccountInformationProperties**](DataLakeStoreAccountInformationProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_lake_store_account_information import DataLakeStoreAccountInformation

# TODO update the JSON string below
json = "{}"
# create an instance of DataLakeStoreAccountInformation from a JSON string
data_lake_store_account_information_instance = DataLakeStoreAccountInformation.from_json(json)
# print the JSON string representation of the object
print(DataLakeStoreAccountInformation.to_json())

# convert the object into a dict
data_lake_store_account_information_dict = data_lake_store_account_information_instance.to_dict()
# create an instance of DataLakeStoreAccountInformation from a dict
data_lake_store_account_information_from_dict = DataLakeStoreAccountInformation.from_dict(data_lake_store_account_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


