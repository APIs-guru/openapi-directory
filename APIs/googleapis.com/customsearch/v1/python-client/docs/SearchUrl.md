# SearchUrl

OpenSearch template and URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | **str** | The actual [OpenSearch template](http://www.opensearch.org/specifications/opensearch/1.1#opensearch_url_template_syntax) for this API. | [optional] 
**type** | **str** | The MIME type of the OpenSearch URL template for the Custom Search JSON API. | [optional] 

## Example

```python
from openapi_client.models.search_url import SearchUrl

# TODO update the JSON string below
json = "{}"
# create an instance of SearchUrl from a JSON string
search_url_instance = SearchUrl.from_json(json)
# print the JSON string representation of the object
print(SearchUrl.to_json())

# convert the object into a dict
search_url_dict = search_url_instance.to_dict()
# create an instance of SearchUrl from a dict
search_url_from_dict = SearchUrl.from_dict(search_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


