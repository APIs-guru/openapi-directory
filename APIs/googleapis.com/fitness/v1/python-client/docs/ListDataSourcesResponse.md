# ListDataSourcesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**List[DataSource]**](DataSource.md) | A previously created data source. | [optional] 

## Example

```python
from openapi_client.models.list_data_sources_response import ListDataSourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDataSourcesResponse from a JSON string
list_data_sources_response_instance = ListDataSourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDataSourcesResponse.to_json())

# convert the object into a dict
list_data_sources_response_dict = list_data_sources_response_instance.to_dict()
# create an instance of ListDataSourcesResponse from a dict
list_data_sources_response_from_dict = ListDataSourcesResponse.from_dict(list_data_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


