# TestCampaignResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** |  | [optional] 
**duration** | **str** |  | 
**results** | **Dict[str, str]** | Result of the test per user | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.test_campaign_response import TestCampaignResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestCampaignResponse from a JSON string
test_campaign_response_instance = TestCampaignResponse.from_json(json)
# print the JSON string representation of the object
print(TestCampaignResponse.to_json())

# convert the object into a dict
test_campaign_response_dict = test_campaign_response_instance.to_dict()
# create an instance of TestCampaignResponse from a dict
test_campaign_response_from_dict = TestCampaignResponse.from_dict(test_campaign_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


