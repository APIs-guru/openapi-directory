# SearchResponseChecksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code supplied with this check request | [optional] 
**date_received** | **str** | The date and time this check was received (in the format YYYY-MM-DD HH:MM:SS) | [optional] 
**ip_address** | **str** | The IP address, if available (this field is no longer used). | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.search_response_checks_inner import SearchResponseChecksInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResponseChecksInner from a JSON string
search_response_checks_inner_instance = SearchResponseChecksInner.from_json(json)
# print the JSON string representation of the object
print(SearchResponseChecksInner.to_json())

# convert the object into a dict
search_response_checks_inner_dict = search_response_checks_inner_instance.to_dict()
# create an instance of SearchResponseChecksInner from a dict
search_response_checks_inner_from_dict = SearchResponseChecksInner.from_dict(search_response_checks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


