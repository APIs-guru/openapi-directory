# CampaignsListResponse

Campaign List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaigns** | [**List[Campaign]**](Campaign.md) | Campaign collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#campaignsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.campaigns_list_response import CampaignsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignsListResponse from a JSON string
campaigns_list_response_instance = CampaignsListResponse.from_json(json)
# print the JSON string representation of the object
print(CampaignsListResponse.to_json())

# convert the object into a dict
campaigns_list_response_dict = campaigns_list_response_instance.to_dict()
# create an instance of CampaignsListResponse from a dict
campaigns_list_response_from_dict = CampaignsListResponse.from_dict(campaigns_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


