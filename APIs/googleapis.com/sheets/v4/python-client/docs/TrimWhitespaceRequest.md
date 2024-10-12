# TrimWhitespaceRequest

Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.trim_whitespace_request import TrimWhitespaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TrimWhitespaceRequest from a JSON string
trim_whitespace_request_instance = TrimWhitespaceRequest.from_json(json)
# print the JSON string representation of the object
print(TrimWhitespaceRequest.to_json())

# convert the object into a dict
trim_whitespace_request_dict = trim_whitespace_request_instance.to_dict()
# create an instance of TrimWhitespaceRequest from a dict
trim_whitespace_request_from_dict = TrimWhitespaceRequest.from_dict(trim_whitespace_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


