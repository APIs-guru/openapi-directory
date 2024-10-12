# DeleteCampaignResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.delete_campaign_response import DeleteCampaignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteCampaignResponse from a JSON string
delete_campaign_response_instance = DeleteCampaignResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteCampaignResponse.to_json())

# convert the object into a dict
delete_campaign_response_dict = delete_campaign_response_instance.to_dict()
# create an instance of DeleteCampaignResponse from a dict
delete_campaign_response_from_dict = DeleteCampaignResponse.from_dict(delete_campaign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


