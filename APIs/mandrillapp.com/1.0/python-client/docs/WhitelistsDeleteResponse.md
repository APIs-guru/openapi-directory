# WhitelistsDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **bool** |  | [optional] 
**email** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.whitelists_delete_response import WhitelistsDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WhitelistsDeleteResponse from a JSON string
whitelists_delete_response_instance = WhitelistsDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(WhitelistsDeleteResponse.to_json())

# convert the object into a dict
whitelists_delete_response_dict = whitelists_delete_response_instance.to_dict()
# create an instance of WhitelistsDeleteResponse from a dict
whitelists_delete_response_from_dict = WhitelistsDeleteResponse.from_dict(whitelists_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


