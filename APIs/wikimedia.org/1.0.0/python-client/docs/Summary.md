# Summary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | [**SummaryCoordinates**](SummaryCoordinates.md) |  | [optional] 
**description** | **str** | Wikidata description for the page | [optional] 
**dir** | **str** | The page language direction code | 
**displaytitle** | **str** | The page title how it should be shown to the user | [optional] 
**extract** | **str** | First several sentences of an article in plain text | 
**extract_html** | **str** | First several sentences of an article in simple HTML format | [optional] 
**lang** | **str** | The page language code | 
**originalimage** | [**Originalimage**](Originalimage.md) |  | [optional] 
**pageid** | **int** | The page ID | [optional] 
**thumbnail** | [**Thumbnail**](Thumbnail.md) |  | [optional] 
**timestamp** | **str** | The time when the page was last editted in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format | [optional] 
**title** | **str** | The page title | 

## Example

```python
from openapi_client.models.summary import Summary

# TODO update the JSON string below
json = "{}"
# create an instance of Summary from a JSON string
summary_instance = Summary.from_json(json)
# print the JSON string representation of the object
print(Summary.to_json())

# convert the object into a dict
summary_dict = summary_instance.to_dict()
# create an instance of Summary from a dict
summary_from_dict = Summary.from_dict(summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


