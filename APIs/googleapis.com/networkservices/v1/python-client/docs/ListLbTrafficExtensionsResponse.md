# ListLbTrafficExtensionsResponse

Message for response to listing `LbTrafficExtension` resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lb_traffic_extensions** | [**List[LbTrafficExtension]**](LbTrafficExtension.md) | The list of &#x60;LbTrafficExtension&#x60; resources. | [optional] 
**next_page_token** | **str** | A token identifying a page of results that the server returns. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_lb_traffic_extensions_response import ListLbTrafficExtensionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLbTrafficExtensionsResponse from a JSON string
list_lb_traffic_extensions_response_instance = ListLbTrafficExtensionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLbTrafficExtensionsResponse.to_json())

# convert the object into a dict
list_lb_traffic_extensions_response_dict = list_lb_traffic_extensions_response_instance.to_dict()
# create an instance of ListLbTrafficExtensionsResponse from a dict
list_lb_traffic_extensions_response_from_dict = ListLbTrafficExtensionsResponse.from_dict(list_lb_traffic_extensions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


