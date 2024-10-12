# GuestResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Authentication token to use for guest user | 
**duration** | **str** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.guest_response import GuestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GuestResponse from a JSON string
guest_response_instance = GuestResponse.from_json(json)
# print the JSON string representation of the object
print(GuestResponse.to_json())

# convert the object into a dict
guest_response_dict = guest_response_instance.to_dict()
# create an instance of GuestResponse from a dict
guest_response_from_dict = GuestResponse.from_dict(guest_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


