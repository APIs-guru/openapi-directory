# RemarketingListsListResponse

Remarketing list response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#remarketingListsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**remarketing_lists** | [**List[RemarketingList]**](RemarketingList.md) | Remarketing list collection. | [optional] 

## Example

```python
from openapi_client.models.remarketing_lists_list_response import RemarketingListsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingListsListResponse from a JSON string
remarketing_lists_list_response_instance = RemarketingListsListResponse.from_json(json)
# print the JSON string representation of the object
print(RemarketingListsListResponse.to_json())

# convert the object into a dict
remarketing_lists_list_response_dict = remarketing_lists_list_response_instance.to_dict()
# create an instance of RemarketingListsListResponse from a dict
remarketing_lists_list_response_from_dict = RemarketingListsListResponse.from_dict(remarketing_lists_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


