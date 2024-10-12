# GetAllAddressesResponseListInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**display_name** | **str** |  | [optional] 
**id** | **str** |  | 
**owner** | **str** |  | 

## Example

```python
from openapi_client.models.get_all_addresses_response_list_inner import GetAllAddressesResponseListInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllAddressesResponseListInner from a JSON string
get_all_addresses_response_list_inner_instance = GetAllAddressesResponseListInner.from_json(json)
# print the JSON string representation of the object
print(GetAllAddressesResponseListInner.to_json())

# convert the object into a dict
get_all_addresses_response_list_inner_dict = get_all_addresses_response_list_inner_instance.to_dict()
# create an instance of GetAllAddressesResponseListInner from a dict
get_all_addresses_response_list_inner_from_dict = GetAllAddressesResponseListInner.from_dict(get_all_addresses_response_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


