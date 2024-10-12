# TargetableRemarketingListsListResponse

Targetable remarketing list response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#targetableRemarketingListsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**targetable_remarketing_lists** | [**List[TargetableRemarketingList]**](TargetableRemarketingList.md) | Targetable remarketing list collection. | [optional] 

## Example

```python
from openapi_client.models.targetable_remarketing_lists_list_response import TargetableRemarketingListsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TargetableRemarketingListsListResponse from a JSON string
targetable_remarketing_lists_list_response_instance = TargetableRemarketingListsListResponse.from_json(json)
# print the JSON string representation of the object
print(TargetableRemarketingListsListResponse.to_json())

# convert the object into a dict
targetable_remarketing_lists_list_response_dict = targetable_remarketing_lists_list_response_instance.to_dict()
# create an instance of TargetableRemarketingListsListResponse from a dict
targetable_remarketing_lists_list_response_from_dict = TargetableRemarketingListsListResponse.from_dict(targetable_remarketing_lists_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


