# TopLevelDomainsListDefaultResponseErrorDetailsInner

Detailed errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.top_level_domains_list_default_response_error_details_inner import TopLevelDomainsListDefaultResponseErrorDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TopLevelDomainsListDefaultResponseErrorDetailsInner from a JSON string
top_level_domains_list_default_response_error_details_inner_instance = TopLevelDomainsListDefaultResponseErrorDetailsInner.from_json(json)
# print the JSON string representation of the object
print(TopLevelDomainsListDefaultResponseErrorDetailsInner.to_json())

# convert the object into a dict
top_level_domains_list_default_response_error_details_inner_dict = top_level_domains_list_default_response_error_details_inner_instance.to_dict()
# create an instance of TopLevelDomainsListDefaultResponseErrorDetailsInner from a dict
top_level_domains_list_default_response_error_details_inner_from_dict = TopLevelDomainsListDefaultResponseErrorDetailsInner.from_dict(top_level_domains_list_default_response_error_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


