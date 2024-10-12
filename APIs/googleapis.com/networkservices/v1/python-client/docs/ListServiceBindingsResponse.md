# ListServiceBindingsResponse

Response returned by the ListServiceBindings method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than those appearing in this response, then &#x60;next_page_token&#x60; is included. To get the next set of results, call this method again using the value of &#x60;next_page_token&#x60; as &#x60;page_token&#x60;. | [optional] 
**service_bindings** | [**List[ServiceBinding]**](ServiceBinding.md) | List of ServiceBinding resources. | [optional] 

## Example

```python
from openapi_client.models.list_service_bindings_response import ListServiceBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceBindingsResponse from a JSON string
list_service_bindings_response_instance = ListServiceBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceBindingsResponse.to_json())

# convert the object into a dict
list_service_bindings_response_dict = list_service_bindings_response_instance.to_dict()
# create an instance of ListServiceBindingsResponse from a dict
list_service_bindings_response_from_dict = ListServiceBindingsResponse.from_dict(list_service_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


