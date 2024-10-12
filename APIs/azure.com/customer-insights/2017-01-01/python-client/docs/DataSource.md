# DataSource

Data Source is a way for us to know the source of instances. A single type can have data coming in from multiple places. In activities we use this to determine precedence rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_reference_id** | **str** | The data source reference id. | [optional] [readonly] 
**data_source_type** | **str** | The data source type. | [optional] [readonly] 
**id** | **int** | The data source ID. | [optional] [readonly] 
**name** | **str** | The data source name | [optional] [readonly] 
**status** | **str** | The data source status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_source import DataSource

# TODO update the JSON string below
json = "{}"
# create an instance of DataSource from a JSON string
data_source_instance = DataSource.from_json(json)
# print the JSON string representation of the object
print(DataSource.to_json())

# convert the object into a dict
data_source_dict = data_source_instance.to_dict()
# create an instance of DataSource from a dict
data_source_from_dict = DataSource.from_dict(data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


