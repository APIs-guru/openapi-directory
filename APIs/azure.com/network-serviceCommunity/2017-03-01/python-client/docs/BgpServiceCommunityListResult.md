# BgpServiceCommunityListResult

Response for the ListServiceCommunity API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[BgpServiceCommunity]**](BgpServiceCommunity.md) | A list of service community resources. | [optional] 

## Example

```python
from openapi_client.models.bgp_service_community_list_result import BgpServiceCommunityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BgpServiceCommunityListResult from a JSON string
bgp_service_community_list_result_instance = BgpServiceCommunityListResult.from_json(json)
# print the JSON string representation of the object
print(BgpServiceCommunityListResult.to_json())

# convert the object into a dict
bgp_service_community_list_result_dict = bgp_service_community_list_result_instance.to_dict()
# create an instance of BgpServiceCommunityListResult from a dict
bgp_service_community_list_result_from_dict = BgpServiceCommunityListResult.from_dict(bgp_service_community_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


