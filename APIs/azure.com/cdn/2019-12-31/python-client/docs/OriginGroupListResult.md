# OriginGroupListResult

Result of the request to list origin groups. It contains a list of origin groups objects and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of origin objects if there are any. | [optional] 
**value** | [**List[OriginGroup]**](OriginGroup.md) | List of CDN origin groups within an endpoint | [optional] [readonly] 

## Example

```python
from openapi_client.models.origin_group_list_result import OriginGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OriginGroupListResult from a JSON string
origin_group_list_result_instance = OriginGroupListResult.from_json(json)
# print the JSON string representation of the object
print(OriginGroupListResult.to_json())

# convert the object into a dict
origin_group_list_result_dict = origin_group_list_result_instance.to_dict()
# create an instance of OriginGroupListResult from a dict
origin_group_list_result_from_dict = OriginGroupListResult.from_dict(origin_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


