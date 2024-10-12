# Campaigns

This type contains a list of campaigns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaigns** | [**List[Campaign]**](Campaign.md) | This is an array of one or campaigns that match the listing or inventory item group specified in the request. | [optional] 

## Example

```python
from openapi_client.models.campaigns import Campaigns

# TODO update the JSON string below
json = "{}"
# create an instance of Campaigns from a JSON string
campaigns_instance = Campaigns.from_json(json)
# print the JSON string representation of the object
print(Campaigns.to_json())

# convert the object into a dict
campaigns_dict = campaigns_instance.to_dict()
# create an instance of Campaigns from a dict
campaigns_from_dict = Campaigns.from_dict(campaigns_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


