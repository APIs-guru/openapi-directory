# CustomDataSources

Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[CustomDataSource]**](CustomDataSource.md) | Collection of custom data sources. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#customDataSources']
**next_link** | **str** | Link to next page for this custom data source collection. | [optional] 
**previous_link** | **str** | Link to previous page for this custom data source collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.custom_data_sources import CustomDataSources

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDataSources from a JSON string
custom_data_sources_instance = CustomDataSources.from_json(json)
# print the JSON string representation of the object
print(CustomDataSources.to_json())

# convert the object into a dict
custom_data_sources_dict = custom_data_sources_instance.to_dict()
# create an instance of CustomDataSources from a dict
custom_data_sources_from_dict = CustomDataSources.from_dict(custom_data_sources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


