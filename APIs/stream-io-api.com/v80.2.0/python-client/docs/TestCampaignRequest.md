# TestCampaignRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | **List[str]** |  | 

## Example

```python
from openapi_client.models.test_campaign_request import TestCampaignRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestCampaignRequest from a JSON string
test_campaign_request_instance = TestCampaignRequest.from_json(json)
# print the JSON string representation of the object
print(TestCampaignRequest.to_json())

# convert the object into a dict
test_campaign_request_dict = test_campaign_request_instance.to_dict()
# create an instance of TestCampaignRequest from a dict
test_campaign_request_from_dict = TestCampaignRequest.from_dict(test_campaign_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


