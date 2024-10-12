# GetLinksTopDomains200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] [readonly] 
**next** | **str** |  | [optional] [readonly] 
**page** | **int** |  | [optional] [readonly] 
**previous** | **str** |  | [optional] [readonly] 
**results** | [**List[LinksTopDomains]**](LinksTopDomains.md) |  | [optional] [readonly] 
**size** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.get_links_top_domains200_response import GetLinksTopDomains200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetLinksTopDomains200Response from a JSON string
get_links_top_domains200_response_instance = GetLinksTopDomains200Response.from_json(json)
# print the JSON string representation of the object
print(GetLinksTopDomains200Response.to_json())

# convert the object into a dict
get_links_top_domains200_response_dict = get_links_top_domains200_response_instance.to_dict()
# create an instance of GetLinksTopDomains200Response from a dict
get_links_top_domains200_response_from_dict = GetLinksTopDomains200Response.from_dict(get_links_top_domains200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


