# SearchGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | [optional] 
**environment_score** | **float** |  | [optional] 
**governance_score** | **float** |  | [optional] 
**last_processing_date** | **date** |  | [optional] 
**social_score** | **float** |  | [optional] 
**total** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.search_get200_response import SearchGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGet200Response from a JSON string
search_get200_response_instance = SearchGet200Response.from_json(json)
# print the JSON string representation of the object
print(SearchGet200Response.to_json())

# convert the object into a dict
search_get200_response_dict = search_get200_response_instance.to_dict()
# create an instance of SearchGet200Response from a dict
search_get200_response_from_dict = SearchGet200Response.from_dict(search_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


