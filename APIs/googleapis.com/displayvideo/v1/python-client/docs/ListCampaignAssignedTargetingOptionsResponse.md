# ListCampaignAssignedTargetingOptionsResponse

Response message for ListCampaignAssignedTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_options** | [**List[AssignedTargetingOption]**](AssignedTargetingOption.md) | The list of assigned targeting options. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListCampaignAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. | [optional] 

## Example

```python
from openapi_client.models.list_campaign_assigned_targeting_options_response import ListCampaignAssignedTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCampaignAssignedTargetingOptionsResponse from a JSON string
list_campaign_assigned_targeting_options_response_instance = ListCampaignAssignedTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCampaignAssignedTargetingOptionsResponse.to_json())

# convert the object into a dict
list_campaign_assigned_targeting_options_response_dict = list_campaign_assigned_targeting_options_response_instance.to_dict()
# create an instance of ListCampaignAssignedTargetingOptionsResponse from a dict
list_campaign_assigned_targeting_options_response_from_dict = ListCampaignAssignedTargetingOptionsResponse.from_dict(list_campaign_assigned_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


