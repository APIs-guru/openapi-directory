# DataStoreTypeProperties

Data Store Type properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository_type** | **str** | Arm type for the manager resource to which the data source type is associated. This is optional. | [optional] 
**state** | **str** | State of the data store type. | 
**supported_data_services_as_sink** | **List[str]** | Supported data services where it can be used as a sink. | [optional] 
**supported_data_services_as_source** | **List[str]** | Supported data services where it can be used as a source. | [optional] 

## Example

```python
from openapi_client.models.data_store_type_properties import DataStoreTypeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataStoreTypeProperties from a JSON string
data_store_type_properties_instance = DataStoreTypeProperties.from_json(json)
# print the JSON string representation of the object
print(DataStoreTypeProperties.to_json())

# convert the object into a dict
data_store_type_properties_dict = data_store_type_properties_instance.to_dict()
# create an instance of DataStoreTypeProperties from a dict
data_store_type_properties_from_dict = DataStoreTypeProperties.from_dict(data_store_type_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


