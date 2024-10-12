# ListDataExchangesResponse

Message for response to the list of data exchanges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_exchanges** | [**List[DataExchange]**](DataExchange.md) | The list of data exchanges. | [optional] 
**next_page_token** | **str** | A token to request the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_data_exchanges_response import ListDataExchangesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDataExchangesResponse from a JSON string
list_data_exchanges_response_instance = ListDataExchangesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDataExchangesResponse.to_json())

# convert the object into a dict
list_data_exchanges_response_dict = list_data_exchanges_response_instance.to_dict()
# create an instance of ListDataExchangesResponse from a dict
list_data_exchanges_response_from_dict = ListDataExchangesResponse.from_dict(list_data_exchanges_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


