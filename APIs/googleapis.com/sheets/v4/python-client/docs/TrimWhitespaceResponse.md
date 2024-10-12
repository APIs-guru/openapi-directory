# TrimWhitespaceResponse

The result of trimming whitespace in cells.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells_changed_count** | **int** | The number of cells that were trimmed of whitespace. | [optional] 

## Example

```python
from openapi_client.models.trim_whitespace_response import TrimWhitespaceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TrimWhitespaceResponse from a JSON string
trim_whitespace_response_instance = TrimWhitespaceResponse.from_json(json)
# print the JSON string representation of the object
print(TrimWhitespaceResponse.to_json())

# convert the object into a dict
trim_whitespace_response_dict = trim_whitespace_response_instance.to_dict()
# create an instance of TrimWhitespaceResponse from a dict
trim_whitespace_response_from_dict = TrimWhitespaceResponse.from_dict(trim_whitespace_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


