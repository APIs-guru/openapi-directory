# Result

A custom search result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_id** | **str** | Indicates the ID of Google&#39;s cached version of the search result. | [optional] 
**display_link** | **str** | An abridged version of this search result’s URL, e.g. www.example.com. | [optional] 
**file_format** | **str** | The file format of the search result. | [optional] 
**formatted_url** | **str** | The URL displayed after the snippet for each search result. | [optional] 
**html_formatted_url** | **str** | The HTML-formatted URL displayed after the snippet for each search result. | [optional] 
**html_snippet** | **str** | The snippet of the search result, in HTML. | [optional] 
**html_title** | **str** | The title of the search result, in HTML. | [optional] 
**image** | [**ResultImage**](ResultImage.md) |  | [optional] 
**kind** | **str** | A unique identifier for the type of current object. For this API, it is &#x60;customsearch#result.&#x60; | [optional] 
**labels** | [**List[ResultLabelsInner]**](ResultLabelsInner.md) | Encapsulates all information about refinement labels. | [optional] 
**link** | **str** | The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar. | [optional] 
**mime** | **str** | The MIME type of the search result. | [optional] 
**pagemap** | **Dict[str, object]** | Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result. | [optional] 
**snippet** | **str** | The snippet of the search result, in plain text. | [optional] 
**title** | **str** | The title of the search result, in plain text. | [optional] 

## Example

```python
from openapi_client.models.result import Result

# TODO update the JSON string below
json = "{}"
# create an instance of Result from a JSON string
result_instance = Result.from_json(json)
# print the JSON string representation of the object
print(Result.to_json())

# convert the object into a dict
result_dict = result_instance.to_dict()
# create an instance of Result from a dict
result_from_dict = Result.from_dict(result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


