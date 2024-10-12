# QueryRequestOptions

The options for query evaluation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip** | **int** | The number of rows to skip from the beginning of the results. Overrides the next page offset when &#x60;&#x60;&#x60;$skipToken&#x60;&#x60;&#x60; property is present. | [optional] 
**skip_token** | **str** | Continuation token for pagination, capturing the next page size and offset, as well as the context of the query. | [optional] 
**top** | **int** | The maximum number of rows that the query should return. Overrides the page size when &#x60;&#x60;&#x60;$skipToken&#x60;&#x60;&#x60; property is present. | [optional] 
**result_format** | **str** | Defines in which format query result returned. | [optional] 

## Example

```python
from openapi_client.models.query_request_options import QueryRequestOptions

# TODO update the JSON string below
json = "{}"
# create an instance of QueryRequestOptions from a JSON string
query_request_options_instance = QueryRequestOptions.from_json(json)
# print the JSON string representation of the object
print(QueryRequestOptions.to_json())

# convert the object into a dict
query_request_options_dict = query_request_options_instance.to_dict()
# create an instance of QueryRequestOptions from a dict
query_request_options_from_dict = QueryRequestOptions.from_dict(query_request_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


