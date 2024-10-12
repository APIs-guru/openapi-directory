# ListCssesResponse

The response message for the `ListCsses` method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csses** | [**List[Css]**](Css.md) | The CSS domains affiliated with the specified CSS group. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_csses_response import ListCssesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCssesResponse from a JSON string
list_csses_response_instance = ListCssesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCssesResponse.to_json())

# convert the object into a dict
list_csses_response_dict = list_csses_response_instance.to_dict()
# create an instance of ListCssesResponse from a dict
list_csses_response_from_dict = ListCssesResponse.from_dict(list_csses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


