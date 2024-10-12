# UpdateDataLakeStoreProperties

The Data Lake Store account properties to use when updating a Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **str** | The optional suffix for the Data Lake Store account. | [optional] 

## Example

```python
from openapi_client.models.update_data_lake_store_properties import UpdateDataLakeStoreProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataLakeStoreProperties from a JSON string
update_data_lake_store_properties_instance = UpdateDataLakeStoreProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateDataLakeStoreProperties.to_json())

# convert the object into a dict
update_data_lake_store_properties_dict = update_data_lake_store_properties_instance.to_dict()
# create an instance of UpdateDataLakeStoreProperties from a dict
update_data_lake_store_properties_from_dict = UpdateDataLakeStoreProperties.from_dict(update_data_lake_store_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


