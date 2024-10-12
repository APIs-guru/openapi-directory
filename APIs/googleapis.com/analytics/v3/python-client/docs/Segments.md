# Segments

An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Segment]**](Segment.md) | A list of segments. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type for segments. | [optional] [default to 'analytics#segments']
**next_link** | **str** | Link to next page for this segment collection. | [optional] 
**previous_link** | **str** | Link to previous page for this segment collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.segments import Segments

# TODO update the JSON string below
json = "{}"
# create an instance of Segments from a JSON string
segments_instance = Segments.from_json(json)
# print the JSON string representation of the object
print(Segments.to_json())

# convert the object into a dict
segments_dict = segments_instance.to_dict()
# create an instance of Segments from a dict
segments_from_dict = Segments.from_dict(segments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


