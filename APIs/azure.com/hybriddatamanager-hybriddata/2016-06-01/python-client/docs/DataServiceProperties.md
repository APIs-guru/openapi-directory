# DataServiceProperties

Data Service properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | State of the data service. | 
**supported_data_sink_types** | **List[str]** | Supported data store types which can be used as a sink. | [optional] 
**supported_data_source_types** | **List[str]** | Supported data store types which can be used as a source. | [optional] 

## Example

```python
from openapi_client.models.data_service_properties import DataServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataServiceProperties from a JSON string
data_service_properties_instance = DataServiceProperties.from_json(json)
# print the JSON string representation of the object
print(DataServiceProperties.to_json())

# convert the object into a dict
data_service_properties_dict = data_service_properties_instance.to_dict()
# create an instance of DataServiceProperties from a dict
data_service_properties_from_dict = DataServiceProperties.from_dict(data_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


