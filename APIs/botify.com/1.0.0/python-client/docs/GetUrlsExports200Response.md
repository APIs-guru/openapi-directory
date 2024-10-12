# GetUrlsExports200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] [readonly] 
**next** | **str** |  | [optional] [readonly] 
**page** | **int** |  | [optional] [readonly] 
**previous** | **str** |  | [optional] [readonly] 
**results** | [**List[CsvExportStatus]**](CsvExportStatus.md) |  | [optional] [readonly] 
**size** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_urls_exports200_response import GetUrlsExports200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUrlsExports200Response from a JSON string
get_urls_exports200_response_instance = GetUrlsExports200Response.from_json(json)
# print the JSON string representation of the object
print(GetUrlsExports200Response.to_json())

# convert the object into a dict
get_urls_exports200_response_dict = get_urls_exports200_response_instance.to_dict()
# create an instance of GetUrlsExports200Response from a dict
get_urls_exports200_response_from_dict = GetUrlsExports200Response.from_dict(get_urls_exports200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


