# OutputDataSource

Describes the data source that output will be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.output_data_source import OutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of OutputDataSource from a JSON string
output_data_source_instance = OutputDataSource.from_json(json)
# print the JSON string representation of the object
print(OutputDataSource.to_json())

# convert the object into a dict
output_data_source_dict = output_data_source_instance.to_dict()
# create an instance of OutputDataSource from a dict
output_data_source_from_dict = OutputDataSource.from_dict(output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


