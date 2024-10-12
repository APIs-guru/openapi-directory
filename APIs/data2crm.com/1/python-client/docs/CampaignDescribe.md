# CampaignDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.campaign_describe import CampaignDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignDescribe from a JSON string
campaign_describe_instance = CampaignDescribe.from_json(json)
# print the JSON string representation of the object
print(CampaignDescribe.to_json())

# convert the object into a dict
campaign_describe_dict = campaign_describe_instance.to_dict()
# create an instance of CampaignDescribe from a dict
campaign_describe_from_dict = CampaignDescribe.from_dict(campaign_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


