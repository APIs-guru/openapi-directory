# BanResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banned_by** | [**UserObject**](UserObject.md) |  | [optional] 
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**created_at** | **datetime** |  | 
**expires** | **datetime** |  | [optional] 
**reason** | **str** |  | [optional] 
**shadow** | **bool** |  | [optional] 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.ban_response import BanResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BanResponse from a JSON string
ban_response_instance = BanResponse.from_json(json)
# print the JSON string representation of the object
print(BanResponse.to_json())

# convert the object into a dict
ban_response_dict = ban_response_instance.to_dict()
# create an instance of BanResponse from a dict
ban_response_from_dict = BanResponse.from_dict(ban_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


