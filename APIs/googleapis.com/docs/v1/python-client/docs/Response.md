# Response

A single response from an update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_footer** | [**CreateFooterResponse**](CreateFooterResponse.md) |  | [optional] 
**create_footnote** | [**CreateFootnoteResponse**](CreateFootnoteResponse.md) |  | [optional] 
**create_header** | [**CreateHeaderResponse**](CreateHeaderResponse.md) |  | [optional] 
**create_named_range** | [**CreateNamedRangeResponse**](CreateNamedRangeResponse.md) |  | [optional] 
**insert_inline_image** | [**InsertInlineImageResponse**](InsertInlineImageResponse.md) |  | [optional] 
**insert_inline_sheets_chart** | [**InsertInlineSheetsChartResponse**](InsertInlineSheetsChartResponse.md) |  | [optional] 
**replace_all_text** | [**ReplaceAllTextResponse**](ReplaceAllTextResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.response import Response

# TODO update the JSON string below
json = "{}"
# create an instance of Response from a JSON string
response_instance = Response.from_json(json)
# print the JSON string representation of the object
print(Response.to_json())

# convert the object into a dict
response_dict = response_instance.to_dict()
# create an instance of Response from a dict
response_from_dict = Response.from_dict(response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


