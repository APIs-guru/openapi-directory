# ListDealsResponse

Response message for listing deals in a proposal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deals** | [**List[Deal]**](Deal.md) | The list of deals. | [optional] 
**next_page_token** | **str** | Token to fetch the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_deals_response import ListDealsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDealsResponse from a JSON string
list_deals_response_instance = ListDealsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDealsResponse.to_json())

# convert the object into a dict
list_deals_response_dict = list_deals_response_instance.to_dict()
# create an instance of ListDealsResponse from a dict
list_deals_response_from_dict = ListDealsResponse.from_dict(list_deals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


