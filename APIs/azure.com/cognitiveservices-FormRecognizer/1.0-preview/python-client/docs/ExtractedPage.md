# ExtractedPage

Extraction information of a single page in a  with a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **int** | Cluster identifier. | [optional] 
**height** | **int** | Height of the page (in pixels). | [optional] 
**key_value_pairs** | [**List[ExtractedKeyValuePair]**](ExtractedKeyValuePair.md) | List of Key-Value pairs extracted from the page. | [optional] 
**number** | **int** | Page number. | [optional] 
**tables** | [**List[ExtractedTable]**](ExtractedTable.md) | List of Tables and their information extracted from the page. | [optional] 
**width** | **int** | Width of the page (in pixels). | [optional] 

## Example

```python
from openapi_client.models.extracted_page import ExtractedPage

# TODO update the JSON string below
json = "{}"
# create an instance of ExtractedPage from a JSON string
extracted_page_instance = ExtractedPage.from_json(json)
# print the JSON string representation of the object
print(ExtractedPage.to_json())

# convert the object into a dict
extracted_page_dict = extracted_page_instance.to_dict()
# create an instance of ExtractedPage from a dict
extracted_page_from_dict = ExtractedPage.from_dict(extracted_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


