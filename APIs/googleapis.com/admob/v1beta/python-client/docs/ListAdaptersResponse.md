# ListAdaptersResponse

Response for the ListAdaptersRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapters** | [**List[Adapter]**](Adapter.md) | The adapter. | [optional] 
**next_page_token** | **str** | Used to set the &#x60;page_token&#x60; in the &#x60;ListAdapterRequest&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_adapters_response import ListAdaptersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdaptersResponse from a JSON string
list_adapters_response_instance = ListAdaptersResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdaptersResponse.to_json())

# convert the object into a dict
list_adapters_response_dict = list_adapters_response_instance.to_dict()
# create an instance of ListAdaptersResponse from a dict
list_adapters_response_from_dict = ListAdaptersResponse.from_dict(list_adapters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


