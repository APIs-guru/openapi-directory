# CreateCampaignResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | [**Campaign**](Campaign.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.create_campaign_response import CreateCampaignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCampaignResponse from a JSON string
create_campaign_response_instance = CreateCampaignResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCampaignResponse.to_json())

# convert the object into a dict
create_campaign_response_dict = create_campaign_response_instance.to_dict()
# create an instance of CreateCampaignResponse from a dict
create_campaign_response_from_dict = CreateCampaignResponse.from_dict(create_campaign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


