# ListPrintersResponse

Response for listing printers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**printers** | [**List[Printer]**](Printer.md) | List of printers. If &#x60;org_unit_id&#x60; was given in the request, then only printers visible for this OU will be returned. If &#x60;org_unit_id&#x60; was not given in the request, then all printers will be returned. | [optional] 

## Example

```python
from openapi_client.models.list_printers_response import ListPrintersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPrintersResponse from a JSON string
list_printers_response_instance = ListPrintersResponse.from_json(json)
# print the JSON string representation of the object
print(ListPrintersResponse.to_json())

# convert the object into a dict
list_printers_response_dict = list_printers_response_instance.to_dict()
# create an instance of ListPrintersResponse from a dict
list_printers_response_from_dict = ListPrintersResponse.from_dict(list_printers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


