# FlagRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_message_id** | **str** | ID of the message when reporting a message | [optional] 
**target_user_id** | **str** | ID of the user when reporting a user | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.flag_request import FlagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FlagRequest from a JSON string
flag_request_instance = FlagRequest.from_json(json)
# print the JSON string representation of the object
print(FlagRequest.to_json())

# convert the object into a dict
flag_request_dict = flag_request_instance.to_dict()
# create an instance of FlagRequest from a dict
flag_request_from_dict = FlagRequest.from_dict(flag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


