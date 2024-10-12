# ListAdGroupsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_groups** | [**List[AdGroup]**](AdGroup.md) | The list of ad groups. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListAdGroups&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_ad_groups_response import ListAdGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdGroupsResponse from a JSON string
list_ad_groups_response_instance = ListAdGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdGroupsResponse.to_json())

# convert the object into a dict
list_ad_groups_response_dict = list_ad_groups_response_instance.to_dict()
# create an instance of ListAdGroupsResponse from a dict
list_ad_groups_response_from_dict = ListAdGroupsResponse.from_dict(list_ad_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


