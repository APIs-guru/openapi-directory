# ReplaceAllTextRequest

Replaces all instances of text matching a criteria with replace text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains_text** | [**SubstringMatchCriteria**](SubstringMatchCriteria.md) |  | [optional] 
**page_object_ids** | **List[str]** | If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn&#39;t exist in the presentation. | [optional] 
**replace_text** | **str** | The text that will replace the matched text. | [optional] 

## Example

```python
from openapi_client.models.replace_all_text_request import ReplaceAllTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceAllTextRequest from a JSON string
replace_all_text_request_instance = ReplaceAllTextRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceAllTextRequest.to_json())

# convert the object into a dict
replace_all_text_request_dict = replace_all_text_request_instance.to_dict()
# create an instance of ReplaceAllTextRequest from a dict
replace_all_text_request_from_dict = ReplaceAllTextRequest.from_dict(replace_all_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


