# QuerySortingConfiguration

The configuration for sorting in the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the column to use in sorting. | [optional] 
**query_sorting_direction** | **str** | The sorting direction | [optional] 

## Example

```python
from openapi_client.models.query_sorting_configuration import QuerySortingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of QuerySortingConfiguration from a JSON string
query_sorting_configuration_instance = QuerySortingConfiguration.from_json(json)
# print the JSON string representation of the object
print(QuerySortingConfiguration.to_json())

# convert the object into a dict
query_sorting_configuration_dict = query_sorting_configuration_instance.to_dict()
# create an instance of QuerySortingConfiguration from a dict
query_sorting_configuration_from_dict = QuerySortingConfiguration.from_dict(query_sorting_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


