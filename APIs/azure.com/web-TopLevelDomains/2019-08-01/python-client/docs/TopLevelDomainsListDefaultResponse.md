# TopLevelDomainsListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TopLevelDomainsListDefaultResponseError**](TopLevelDomainsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.top_level_domains_list_default_response import TopLevelDomainsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TopLevelDomainsListDefaultResponse from a JSON string
top_level_domains_list_default_response_instance = TopLevelDomainsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(TopLevelDomainsListDefaultResponse.to_json())

# convert the object into a dict
top_level_domains_list_default_response_dict = top_level_domains_list_default_response_instance.to_dict()
# create an instance of TopLevelDomainsListDefaultResponse from a dict
top_level_domains_list_default_response_from_dict = TopLevelDomainsListDefaultResponse.from_dict(top_level_domains_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


