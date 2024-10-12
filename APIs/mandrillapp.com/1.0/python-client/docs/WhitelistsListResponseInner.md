# WhitelistsListResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** |  | [optional] 
**detail** | **str** |  | [optional] 
**email** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.whitelists_list_response_inner import WhitelistsListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of WhitelistsListResponseInner from a JSON string
whitelists_list_response_inner_instance = WhitelistsListResponseInner.from_json(json)
# print the JSON string representation of the object
print(WhitelistsListResponseInner.to_json())

# convert the object into a dict
whitelists_list_response_inner_dict = whitelists_list_response_inner_instance.to_dict()
# create an instance of WhitelistsListResponseInner from a dict
whitelists_list_response_inner_from_dict = WhitelistsListResponseInner.from_dict(whitelists_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


