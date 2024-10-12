# ReplaceAllTextResponse

The result of replacing text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurrences_changed** | **int** | The number of occurrences changed by replacing all text. | [optional] 

## Example

```python
from openapi_client.models.replace_all_text_response import ReplaceAllTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceAllTextResponse from a JSON string
replace_all_text_response_instance = ReplaceAllTextResponse.from_json(json)
# print the JSON string representation of the object
print(ReplaceAllTextResponse.to_json())

# convert the object into a dict
replace_all_text_response_dict = replace_all_text_response_instance.to_dict()
# create an instance of ReplaceAllTextResponse from a dict
replace_all_text_response_from_dict = ReplaceAllTextResponse.from_dict(replace_all_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


