# ForwardingAddress

Settings for a forwarding address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarding_email** | **str** | An email address to which messages can be forwarded. | [optional] 
**verification_status** | **str** | Indicates whether this address has been verified and is usable for forwarding. Read-only. | [optional] 

## Example

```python
from openapi_client.models.forwarding_address import ForwardingAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ForwardingAddress from a JSON string
forwarding_address_instance = ForwardingAddress.from_json(json)
# print the JSON string representation of the object
print(ForwardingAddress.to_json())

# convert the object into a dict
forwarding_address_dict = forwarding_address_instance.to_dict()
# create an instance of ForwardingAddress from a dict
forwarding_address_from_dict = ForwardingAddress.from_dict(forwarding_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


