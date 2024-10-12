# GetWFSInventory200ResponseHeaders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Information about the quantity in inventory | [optional] 
**offset** | **int** | Offset is the number of records you wish to skip before selecting results. | [optional] 
**total_count** | **int** | Total number of results for query. | [optional] 

## Example

```python
from openapi_client.models.get_wfs_inventory200_response_headers import GetWFSInventory200ResponseHeaders

# TODO update the JSON string below
json = "{}"
# create an instance of GetWFSInventory200ResponseHeaders from a JSON string
get_wfs_inventory200_response_headers_instance = GetWFSInventory200ResponseHeaders.from_json(json)
# print the JSON string representation of the object
print(GetWFSInventory200ResponseHeaders.to_json())

# convert the object into a dict
get_wfs_inventory200_response_headers_dict = get_wfs_inventory200_response_headers_instance.to_dict()
# create an instance of GetWFSInventory200ResponseHeaders from a dict
get_wfs_inventory200_response_headers_from_dict = GetWFSInventory200ResponseHeaders.from_dict(get_wfs_inventory200_response_headers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


