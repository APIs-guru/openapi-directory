# UnmuteUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_id** | **str** |  | 
**target_ids** | **List[str]** |  | 
**timeout** | **int** |  | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unmute_user_request import UnmuteUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnmuteUserRequest from a JSON string
unmute_user_request_instance = UnmuteUserRequest.from_json(json)
# print the JSON string representation of the object
print(UnmuteUserRequest.to_json())

# convert the object into a dict
unmute_user_request_dict = unmute_user_request_instance.to_dict()
# create an instance of UnmuteUserRequest from a dict
unmute_user_request_from_dict = UnmuteUserRequest.from_dict(unmute_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


