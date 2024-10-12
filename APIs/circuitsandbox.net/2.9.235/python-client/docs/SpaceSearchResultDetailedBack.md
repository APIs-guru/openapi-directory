# SpaceSearchResultDetailedBack


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**res_list** | [**List[SpaceSearchResultDetailed]**](SpaceSearchResultDetailed.md) | A list of v2restspacesearchresultdetailedback containing spaceId, item ids and file ids | [optional] 

## Example

```python
from openapi_client.models.space_search_result_detailed_back import SpaceSearchResultDetailedBack

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceSearchResultDetailedBack from a JSON string
space_search_result_detailed_back_instance = SpaceSearchResultDetailedBack.from_json(json)
# print the JSON string representation of the object
print(SpaceSearchResultDetailedBack.to_json())

# convert the object into a dict
space_search_result_detailed_back_dict = space_search_result_detailed_back_instance.to_dict()
# create an instance of SpaceSearchResultDetailedBack from a dict
space_search_result_detailed_back_from_dict = SpaceSearchResultDetailedBack.from_dict(space_search_result_detailed_back_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


