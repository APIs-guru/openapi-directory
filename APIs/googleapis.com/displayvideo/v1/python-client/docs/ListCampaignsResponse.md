# ListCampaignsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaigns** | [**List[Campaign]**](Campaign.md) | The list of campaigns. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListCampaigns&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_campaigns_response import ListCampaignsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCampaignsResponse from a JSON string
list_campaigns_response_instance = ListCampaignsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCampaignsResponse.to_json())

# convert the object into a dict
list_campaigns_response_dict = list_campaigns_response_instance.to_dict()
# create an instance of ListCampaignsResponse from a dict
list_campaigns_response_from_dict = ListCampaignsResponse.from_dict(list_campaigns_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


