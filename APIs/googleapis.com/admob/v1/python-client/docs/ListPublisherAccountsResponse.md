# ListPublisherAccountsResponse

Response for the publisher account list request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**List[PublisherAccount]**](PublisherAccount.md) | Publisher that the client credentials can access. | [optional] 
**next_page_token** | **str** | If not empty, indicates that there might be more accounts for the request; you must pass this value in a new &#x60;ListPublisherAccountsRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_publisher_accounts_response import ListPublisherAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPublisherAccountsResponse from a JSON string
list_publisher_accounts_response_instance = ListPublisherAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPublisherAccountsResponse.to_json())

# convert the object into a dict
list_publisher_accounts_response_dict = list_publisher_accounts_response_instance.to_dict()
# create an instance of ListPublisherAccountsResponse from a dict
list_publisher_accounts_response_from_dict = ListPublisherAccountsResponse.from_dict(list_publisher_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


