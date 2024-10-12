# TopLevelDomainsListDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[TopLevelDomainsListDefaultResponseErrorDetailsInner]**](TopLevelDomainsListDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.top_level_domains_list_default_response_error import TopLevelDomainsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of TopLevelDomainsListDefaultResponseError from a JSON string
top_level_domains_list_default_response_error_instance = TopLevelDomainsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(TopLevelDomainsListDefaultResponseError.to_json())

# convert the object into a dict
top_level_domains_list_default_response_error_dict = top_level_domains_list_default_response_error_instance.to_dict()
# create an instance of TopLevelDomainsListDefaultResponseError from a dict
top_level_domains_list_default_response_error_from_dict = TopLevelDomainsListDefaultResponseError.from_dict(top_level_domains_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


