# DataSource

Datasources under OMS Workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | The ETag of the data source. | [optional] 
**kind** | [**DataSourceKind**](DataSourceKind.md) |  | 
**properties** | **object** | JSON object | 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


