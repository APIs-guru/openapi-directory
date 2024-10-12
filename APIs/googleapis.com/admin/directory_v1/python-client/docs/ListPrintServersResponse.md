# ListPrintServersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; in a request to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**print_servers** | [**List[PrintServer]**](PrintServer.md) | List of print servers. | [optional] 

## Example

```python
from openapi_client.models.list_print_servers_response import ListPrintServersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPrintServersResponse from a JSON string
list_print_servers_response_instance = ListPrintServersResponse.from_json(json)
# print the JSON string representation of the object
print(ListPrintServersResponse.to_json())

# convert the object into a dict
list_print_servers_response_dict = list_print_servers_response_instance.to_dict()
# create an instance of ListPrintServersResponse from a dict
list_print_servers_response_from_dict = ListPrintServersResponse.from_dict(list_print_servers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


