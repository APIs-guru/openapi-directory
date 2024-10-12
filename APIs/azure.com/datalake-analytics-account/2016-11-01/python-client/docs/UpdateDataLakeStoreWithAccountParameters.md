# UpdateDataLakeStoreWithAccountParameters

The parameters used to update a Data Lake Store account while updating a Data Lake Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the Data Lake Store account to update. | 
**properties** | [**UpdateDataLakeStoreProperties**](UpdateDataLakeStoreProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_data_lake_store_with_account_parameters import UpdateDataLakeStoreWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataLakeStoreWithAccountParameters from a JSON string
update_data_lake_store_with_account_parameters_instance = UpdateDataLakeStoreWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateDataLakeStoreWithAccountParameters.to_json())

# convert the object into a dict
update_data_lake_store_with_account_parameters_dict = update_data_lake_store_with_account_parameters_instance.to_dict()
# create an instance of UpdateDataLakeStoreWithAccountParameters from a dict
update_data_lake_store_with_account_parameters_from_dict = UpdateDataLakeStoreWithAccountParameters.from_dict(update_data_lake_store_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


