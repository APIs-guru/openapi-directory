# CustomDimensions

A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[CustomDimension]**](CustomDimension.md) | Collection of custom dimensions. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#customDimensions']
**next_link** | **str** | Link to next page for this custom dimension collection. | [optional] 
**previous_link** | **str** | Link to previous page for this custom dimension collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.custom_dimensions import CustomDimensions

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDimensions from a JSON string
custom_dimensions_instance = CustomDimensions.from_json(json)
# print the JSON string representation of the object
print(CustomDimensions.to_json())

# convert the object into a dict
custom_dimensions_dict = custom_dimensions_instance.to_dict()
# create an instance of CustomDimensions from a dict
custom_dimensions_from_dict = CustomDimensions.from_dict(custom_dimensions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


