# GroupingInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grouping_id** | **str** | Optional grouping ID for grouping the passes with the same ID visually together. Grouping with different types of passes is allowed. | [optional] 
**sort_index** | **int** | Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with the same sort index, the sorting behavior is undefined. | [optional] 

## Example

```python
from openapi_client.models.grouping_info import GroupingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GroupingInfo from a JSON string
grouping_info_instance = GroupingInfo.from_json(json)
# print the JSON string representation of the object
print(GroupingInfo.to_json())

# convert the object into a dict
grouping_info_dict = grouping_info_instance.to_dict()
# create an instance of GroupingInfo from a dict
grouping_info_from_dict = GroupingInfo.from_dict(grouping_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


