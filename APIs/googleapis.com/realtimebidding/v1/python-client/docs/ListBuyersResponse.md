# ListBuyersResponse

A response containing buyer account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyers** | [**List[Buyer]**](Buyer.md) | List of buyers. | [optional] 
**next_page_token** | **str** | A token which can be passed to a subsequent call to the &#x60;ListBuyers&#x60; method to retrieve the next page of results in ListBuyersRequest.pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_buyers_response import ListBuyersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBuyersResponse from a JSON string
list_buyers_response_instance = ListBuyersResponse.from_json(json)
# print the JSON string representation of the object
print(ListBuyersResponse.to_json())

# convert the object into a dict
list_buyers_response_dict = list_buyers_response_instance.to_dict()
# create an instance of ListBuyersResponse from a dict
list_buyers_response_from_dict = ListBuyersResponse.from_dict(list_buyers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


