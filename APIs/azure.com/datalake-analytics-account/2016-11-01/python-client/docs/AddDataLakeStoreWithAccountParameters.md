# AddDataLakeStoreWithAccountParameters

The parameters used to add a new Data Lake Store account while creating a new Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the Data Lake Store account to add. | 
**properties** | [**AddDataLakeStoreProperties**](AddDataLakeStoreProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_data_lake_store_with_account_parameters import AddDataLakeStoreWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AddDataLakeStoreWithAccountParameters from a JSON string
add_data_lake_store_with_account_parameters_instance = AddDataLakeStoreWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(AddDataLakeStoreWithAccountParameters.to_json())

# convert the object into a dict
add_data_lake_store_with_account_parameters_dict = add_data_lake_store_with_account_parameters_instance.to_dict()
# create an instance of AddDataLakeStoreWithAccountParameters from a dict
add_data_lake_store_with_account_parameters_from_dict = AddDataLakeStoreWithAccountParameters.from_dict(add_data_lake_store_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


