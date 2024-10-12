# DataStoreType

Data Store Type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataStoreTypeProperties**](DataStoreTypeProperties.md) |  | 
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**type** | **str** | Type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_store_type import DataStoreType

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreType from a JSON string
data_store_type_instance = DataStoreType.from_json(json)
# print the JSON string representation of the object
print(DataStoreType.to_json())

# convert the object into a dict
data_store_type_dict = data_store_type_instance.to_dict()
# create an instance of DataStoreType from a dict
data_store_type_from_dict = DataStoreType.from_dict(data_store_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


