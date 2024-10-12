# ListBigQueryExportsResponse

Response message for listing BigQuery exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_exports** | [**List[GoogleCloudSecuritycenterV1BigQueryExport]**](GoogleCloudSecuritycenterV1BigQueryExport.md) | The BigQuery exports from the specified parent. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_big_query_exports_response import ListBigQueryExportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBigQueryExportsResponse from a JSON string
list_big_query_exports_response_instance = ListBigQueryExportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBigQueryExportsResponse.to_json())

# convert the object into a dict
list_big_query_exports_response_dict = list_big_query_exports_response_instance.to_dict()
# create an instance of ListBigQueryExportsResponse from a dict
list_big_query_exports_response_from_dict = ListBigQueryExportsResponse.from_dict(list_big_query_exports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


