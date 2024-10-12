# ListGlossariesResponse

Response message for ListGlossaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**glossaries** | [**List[Glossary]**](Glossary.md) | The list of glossaries for a project. | [optional] 
**next_page_token** | **str** | A token to retrieve a page of results. Pass this value in the [ListGlossariesRequest.page_token] field in the subsequent call to &#x60;ListGlossaries&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_glossaries_response import ListGlossariesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGlossariesResponse from a JSON string
list_glossaries_response_instance = ListGlossariesResponse.from_json(json)
# print the JSON string representation of the object
print(ListGlossariesResponse.to_json())

# convert the object into a dict
list_glossaries_response_dict = list_glossaries_response_instance.to_dict()
# create an instance of ListGlossariesResponse from a dict
list_glossaries_response_from_dict = ListGlossariesResponse.from_dict(list_glossaries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


