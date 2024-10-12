# PageResult

Extracted information from a single page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **int** | Cluster identifier. | [optional] 
**key_value_pairs** | [**List[KeyValuePair]**](KeyValuePair.md) | List of key-value pairs extracted from the page. | [optional] 
**page** | **int** | Page number. | 
**tables** | [**List[DataTable]**](DataTable.md) | List of data tables extracted from the page. | [optional] 

## Example

```python
from openapi_client.models.page_result import PageResult

# TODO update the JSON string below
json = "{}"
# create an instance of PageResult from a JSON string
page_result_instance = PageResult.from_json(json)
# print the JSON string representation of the object
print(PageResult.to_json())

# convert the object into a dict
page_result_dict = page_result_instance.to_dict()
# create an instance of PageResult from a dict
page_result_from_dict = PageResult.from_dict(page_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


