# GetWFSInventory200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**GetWFSInventory200ResponseHeaders**](GetWFSInventory200ResponseHeaders.md) |  | [optional] 
**payload** | [**GetWFSInventory200ResponsePayload**](GetWFSInventory200ResponsePayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_wfs_inventory200_response import GetWFSInventory200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWFSInventory200Response from a JSON string
get_wfs_inventory200_response_instance = GetWFSInventory200Response.from_json(json)
# print the JSON string representation of the object
print(GetWFSInventory200Response.to_json())

# convert the object into a dict
get_wfs_inventory200_response_dict = get_wfs_inventory200_response_instance.to_dict()
# create an instance of GetWFSInventory200Response from a dict
get_wfs_inventory200_response_from_dict = GetWFSInventory200Response.from_dict(get_wfs_inventory200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


