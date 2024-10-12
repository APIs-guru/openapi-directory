# QueryRecipientsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter_conditions** | **Dict[str, object]** |  | 
**limit** | **int** |  | [optional] 
**sort** | [**CampaignSort**](CampaignSort.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_recipients_request import QueryRecipientsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRecipientsRequest from a JSON string
query_recipients_request_instance = QueryRecipientsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryRecipientsRequest.to_json())

# convert the object into a dict
query_recipients_request_dict = query_recipients_request_instance.to_dict()
# create an instance of QueryRecipientsRequest from a dict
query_recipients_request_from_dict = QueryRecipientsRequest.from_dict(query_recipients_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


