# ListCustomConnectorsResponse

Response message for Connectors.ListCustomConnectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_connectors** | [**List[CustomConnector]**](CustomConnector.md) | A list of customConnectors. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_custom_connectors_response import ListCustomConnectorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomConnectorsResponse from a JSON string
list_custom_connectors_response_instance = ListCustomConnectorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomConnectorsResponse.to_json())

# convert the object into a dict
list_custom_connectors_response_dict = list_custom_connectors_response_instance.to_dict()
# create an instance of ListCustomConnectorsResponse from a dict
list_custom_connectors_response_from_dict = ListCustomConnectorsResponse.from_dict(list_custom_connectors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


