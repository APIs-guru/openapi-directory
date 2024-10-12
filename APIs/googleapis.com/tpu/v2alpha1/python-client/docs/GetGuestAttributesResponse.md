# GetGuestAttributesResponse

Response for GetGuestAttributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guest_attributes** | [**List[GuestAttributes]**](GuestAttributes.md) | The guest attributes for the TPU workers. | [optional] 

## Example

```python
from openapi_client.models.get_guest_attributes_response import GetGuestAttributesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetGuestAttributesResponse from a JSON string
get_guest_attributes_response_instance = GetGuestAttributesResponse.from_json(json)
# print the JSON string representation of the object
print(GetGuestAttributesResponse.to_json())

# convert the object into a dict
get_guest_attributes_response_dict = get_guest_attributes_response_instance.to_dict()
# create an instance of GetGuestAttributesResponse from a dict
get_guest_attributes_response_from_dict = GetGuestAttributesResponse.from_dict(get_guest_attributes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


