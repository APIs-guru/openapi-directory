# UpdateCampaignRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**CampaignUpdateableFieldsRequest**](CampaignUpdateableFieldsRequest.md) |  | 

## Example

```python
from openapi_client.models.update_campaign_request import UpdateCampaignRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCampaignRequest from a JSON string
update_campaign_request_instance = UpdateCampaignRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCampaignRequest.to_json())

# convert the object into a dict
update_campaign_request_dict = update_campaign_request_instance.to_dict()
# create an instance of UpdateCampaignRequest from a dict
update_campaign_request_from_dict = UpdateCampaignRequest.from_dict(update_campaign_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


