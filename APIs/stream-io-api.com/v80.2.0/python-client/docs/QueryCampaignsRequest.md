# QueryCampaignsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_conditions** | **Dict[str, object]** |  | 
**limit** | **int** |  | [optional] 
**sort** | [**CampaignSort**](CampaignSort.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_campaigns_request import QueryCampaignsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryCampaignsRequest from a JSON string
query_campaigns_request_instance = QueryCampaignsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryCampaignsRequest.to_json())

# convert the object into a dict
query_campaigns_request_dict = query_campaigns_request_instance.to_dict()
# create an instance of QueryCampaignsRequest from a dict
query_campaigns_request_from_dict = QueryCampaignsRequest.from_dict(query_campaigns_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


