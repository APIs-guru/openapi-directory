# FindReplaceResponse

The result of the find/replace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formulas_changed** | **int** | The number of formula cells changed. | [optional] 
**occurrences_changed** | **int** | The number of occurrences (possibly multiple within a cell) changed. For example, if replacing &#x60;\&quot;e\&quot;&#x60; with &#x60;\&quot;o\&quot;&#x60; in &#x60;\&quot;Google Sheets\&quot;&#x60;, this would be &#x60;\&quot;3\&quot;&#x60; because &#x60;\&quot;Google Sheets\&quot;&#x60; -&gt; &#x60;\&quot;Googlo Shoots\&quot;&#x60;. | [optional] 
**rows_changed** | **int** | The number of rows changed. | [optional] 
**sheets_changed** | **int** | The number of sheets changed. | [optional] 
**values_changed** | **int** | The number of non-formula cells changed. | [optional] 

## Example

```python
from openapi_client.models.find_replace_response import FindReplaceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FindReplaceResponse from a JSON string
find_replace_response_instance = FindReplaceResponse.from_json(json)
# print the JSON string representation of the object
print(FindReplaceResponse.to_json())

# convert the object into a dict
find_replace_response_dict = find_replace_response_instance.to_dict()
# create an instance of FindReplaceResponse from a dict
find_replace_response_from_dict = FindReplaceResponse.from_dict(find_replace_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


