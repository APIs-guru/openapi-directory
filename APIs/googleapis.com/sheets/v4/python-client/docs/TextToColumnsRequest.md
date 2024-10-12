# TextToColumnsRequest

Splits a column of text into multiple columns, based on a delimiter in each cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** | The delimiter to use. Used only if delimiterType is CUSTOM. | [optional] 
**delimiter_type** | **str** | The delimiter type to use. | [optional] 
**source** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_to_columns_request import TextToColumnsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TextToColumnsRequest from a JSON string
text_to_columns_request_instance = TextToColumnsRequest.from_json(json)
# print the JSON string representation of the object
print(TextToColumnsRequest.to_json())

# convert the object into a dict
text_to_columns_request_dict = text_to_columns_request_instance.to_dict()
# create an instance of TextToColumnsRequest from a dict
text_to_columns_request_from_dict = TextToColumnsRequest.from_dict(text_to_columns_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


