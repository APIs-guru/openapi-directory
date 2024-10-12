# WhitelistsAddResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**whether** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.whitelists_add_response import WhitelistsAddResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WhitelistsAddResponse from a JSON string
whitelists_add_response_instance = WhitelistsAddResponse.from_json(json)
# print the JSON string representation of the object
print(WhitelistsAddResponse.to_json())

# convert the object into a dict
whitelists_add_response_dict = whitelists_add_response_instance.to_dict()
# create an instance of WhitelistsAddResponse from a dict
whitelists_add_response_from_dict = WhitelistsAddResponse.from_dict(whitelists_add_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


