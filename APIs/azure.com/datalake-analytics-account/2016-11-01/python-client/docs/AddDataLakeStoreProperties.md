# AddDataLakeStoreProperties

The Data Lake Store account properties to use when adding a new Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **str** | The optional suffix for the Data Lake Store account. | [optional] 

## Example

```python
from openapi_client.models.add_data_lake_store_properties import AddDataLakeStoreProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AddDataLakeStoreProperties from a JSON string
add_data_lake_store_properties_instance = AddDataLakeStoreProperties.from_json(json)
# print the JSON string representation of the object
print(AddDataLakeStoreProperties.to_json())

# convert the object into a dict
add_data_lake_store_properties_dict = add_data_lake_store_properties_instance.to_dict()
# create an instance of AddDataLakeStoreProperties from a dict
add_data_lake_store_properties_from_dict = AddDataLakeStoreProperties.from_dict(add_data_lake_store_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


