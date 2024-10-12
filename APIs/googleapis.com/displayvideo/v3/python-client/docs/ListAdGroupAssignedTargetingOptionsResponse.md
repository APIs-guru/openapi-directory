# ListAdGroupAssignedTargetingOptionsResponse

Response message for ListAdGroupAssignedTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_options** | [**List[AssignedTargetingOption]**](AssignedTargetingOption.md) | The list of assigned targeting options. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListAdGroupAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more AssignedTargetingOption resources to return. | [optional] 

## Example

```python
from openapi_client.models.list_ad_group_assigned_targeting_options_response import ListAdGroupAssignedTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdGroupAssignedTargetingOptionsResponse from a JSON string
list_ad_group_assigned_targeting_options_response_instance = ListAdGroupAssignedTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdGroupAssignedTargetingOptionsResponse.to_json())

# convert the object into a dict
list_ad_group_assigned_targeting_options_response_dict = list_ad_group_assigned_targeting_options_response_instance.to_dict()
# create an instance of ListAdGroupAssignedTargetingOptionsResponse from a dict
list_ad_group_assigned_targeting_options_response_from_dict = ListAdGroupAssignedTargetingOptionsResponse.from_dict(list_ad_group_assigned_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


