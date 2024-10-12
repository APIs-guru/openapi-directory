# GetGuestAttributesRequest

Request for GetGuestAttributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_path** | **str** | The guest attributes path to be queried. | [optional] 
**worker_ids** | **List[str]** | The 0-based worker ID. If it is empty, all workers&#39; GuestAttributes will be returned. | [optional] 

## Example

```python
from openapi_client.models.get_guest_attributes_request import GetGuestAttributesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetGuestAttributesRequest from a JSON string
get_guest_attributes_request_instance = GetGuestAttributesRequest.from_json(json)
# print the JSON string representation of the object
print(GetGuestAttributesRequest.to_json())

# convert the object into a dict
get_guest_attributes_request_dict = get_guest_attributes_request_instance.to_dict()
# create an instance of GetGuestAttributesRequest from a dict
get_guest_attributes_request_from_dict = GetGuestAttributesRequest.from_dict(get_guest_attributes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


