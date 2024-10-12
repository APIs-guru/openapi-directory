# BulkListAdGroupAssignedTargetingOptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_assigned_targeting_options** | [**List[AdGroupAssignedTargetingOption]**](AdGroupAssignedTargetingOption.md) | The list of wrapper objects, each providing an assigned targeting option and the ad group it is assigned to. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to &#x60;BulkListAdGroupAssignedTargetingOptions&#x60; to fetch the next page of results. This token will be absent if there are no more AdGroupAssignedTargetingOption resources to return. | [optional] 

## Example

```python
from openapi_client.models.bulk_list_ad_group_assigned_targeting_options_response import BulkListAdGroupAssignedTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkListAdGroupAssignedTargetingOptionsResponse from a JSON string
bulk_list_ad_group_assigned_targeting_options_response_instance = BulkListAdGroupAssignedTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(BulkListAdGroupAssignedTargetingOptionsResponse.to_json())

# convert the object into a dict
bulk_list_ad_group_assigned_targeting_options_response_dict = bulk_list_ad_group_assigned_targeting_options_response_instance.to_dict()
# create an instance of BulkListAdGroupAssignedTargetingOptionsResponse from a dict
bulk_list_ad_group_assigned_targeting_options_response_from_dict = BulkListAdGroupAssignedTargetingOptionsResponse.from_dict(bulk_list_ad_group_assigned_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


