# GetWFSInventory200ResponsePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory** | [**List[GetWFSInventory200ResponsePayloadInventoryInner]**](GetWFSInventory200ResponsePayloadInventoryInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_wfs_inventory200_response_payload import GetWFSInventory200ResponsePayload

# TODO update the JSON string below
json = "{}"
# create an instance of GetWFSInventory200ResponsePayload from a JSON string
get_wfs_inventory200_response_payload_instance = GetWFSInventory200ResponsePayload.from_json(json)
# print the JSON string representation of the object
print(GetWFSInventory200ResponsePayload.to_json())

# convert the object into a dict
get_wfs_inventory200_response_payload_dict = get_wfs_inventory200_response_payload_instance.to_dict()
# create an instance of GetWFSInventory200ResponsePayload from a dict
get_wfs_inventory200_response_payload_from_dict = GetWFSInventory200ResponsePayload.from_dict(get_wfs_inventory200_response_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


