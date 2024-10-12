# GuestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | 

## Example

```python
from openapi_client.models.guest_request import GuestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GuestRequest from a JSON string
guest_request_instance = GuestRequest.from_json(json)
# print the JSON string representation of the object
print(GuestRequest.to_json())

# convert the object into a dict
guest_request_dict = guest_request_instance.to_dict()
# create an instance of GuestRequest from a dict
guest_request_from_dict = GuestRequest.from_dict(guest_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


