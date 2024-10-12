# PatchTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] [default to True]
**channel** | **str** |  | [optional] 
**driver** | **str** |  | [optional] 
**physical_id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_token_request import PatchTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchTokenRequest from a JSON string
patch_token_request_instance = PatchTokenRequest.from_json(json)
# print the JSON string representation of the object
print(PatchTokenRequest.to_json())

# convert the object into a dict
patch_token_request_dict = patch_token_request_instance.to_dict()
# create an instance of PatchTokenRequest from a dict
patch_token_request_from_dict = PatchTokenRequest.from_dict(patch_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


