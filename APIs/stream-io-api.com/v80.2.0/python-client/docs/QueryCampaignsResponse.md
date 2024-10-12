# QueryCampaignsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaigns** | [**List[Campaign]**](Campaign.md) |  | 
**channels** | [**Dict[str, Channel]**](Channel.md) |  | 
**duration** | **str** | Duration of the request in human-readable format | 
**segments** | [**Dict[str, Segment]**](Segment.md) |  | 
**users** | [**Dict[str, UserObject]**](UserObject.md) |  | 

## Example

```python
from openapi_client.models.query_campaigns_response import QueryCampaignsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryCampaignsResponse from a JSON string
query_campaigns_response_instance = QueryCampaignsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryCampaignsResponse.to_json())

# convert the object into a dict
query_campaigns_response_dict = query_campaigns_response_instance.to_dict()
# create an instance of QueryCampaignsResponse from a dict
query_campaigns_response_from_dict = QueryCampaignsResponse.from_dict(query_campaigns_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


