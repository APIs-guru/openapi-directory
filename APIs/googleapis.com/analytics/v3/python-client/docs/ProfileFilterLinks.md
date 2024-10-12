# ProfileFilterLinks

A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ProfileFilterLink]**](ProfileFilterLink.md) | A list of profile filter links. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#profileFilterLinks']
**next_link** | **str** | Link to next page for this profile filter link collection. | [optional] 
**previous_link** | **str** | Link to previous page for this profile filter link collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of results in the response. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.profile_filter_links import ProfileFilterLinks

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileFilterLinks from a JSON string
profile_filter_links_instance = ProfileFilterLinks.from_json(json)
# print the JSON string representation of the object
print(ProfileFilterLinks.to_json())

# convert the object into a dict
profile_filter_links_dict = profile_filter_links_instance.to_dict()
# create an instance of ProfileFilterLinks from a dict
profile_filter_links_from_dict = ProfileFilterLinks.from_dict(profile_filter_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


