# ListGatewaysResponse

Response returned by the ListGateways method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gateways** | [**List[Gateway]**](Gateway.md) | List of Gateway resources. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_gateways_response import ListGatewaysResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGatewaysResponse from a JSON string
list_gateways_response_instance = ListGatewaysResponse.from_json(json)
# print the JSON string representation of the object
print(ListGatewaysResponse.to_json())

# convert the object into a dict
list_gateways_response_dict = list_gateways_response_instance.to_dict()
# create an instance of ListGatewaysResponse from a dict
list_gateways_response_from_dict = ListGatewaysResponse.from_dict(list_gateways_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


