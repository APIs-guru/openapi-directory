# ListOrgDataExchangesResponse

Message for response to listing data exchanges in an organization and location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_exchanges** | [**List[DataExchange]**](DataExchange.md) | The list of data exchanges. | [optional] 
**next_page_token** | **str** | A token to request the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_org_data_exchanges_response import ListOrgDataExchangesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrgDataExchangesResponse from a JSON string
list_org_data_exchanges_response_instance = ListOrgDataExchangesResponse.from_json(json)
# print the JSON string representation of the object
print(ListOrgDataExchangesResponse.to_json())

# convert the object into a dict
list_org_data_exchanges_response_dict = list_org_data_exchanges_response_instance.to_dict()
# create an instance of ListOrgDataExchangesResponse from a dict
list_org_data_exchanges_response_from_dict = ListOrgDataExchangesResponse.from_dict(list_org_data_exchanges_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


