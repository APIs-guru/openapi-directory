# GetAllAddressesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list** | [**List[GetAllAddressesResponseListInner]**](GetAllAddressesResponseListInner.md) |  | 

## Example

```python
from openapi_client.models.get_all_addresses_response import GetAllAddressesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAllAddressesResponse from a JSON string
get_all_addresses_response_instance = GetAllAddressesResponse.from_json(json)
# print the JSON string representation of the object
print(GetAllAddressesResponse.to_json())

# convert the object into a dict
get_all_addresses_response_dict = get_all_addresses_response_instance.to_dict()
# create an instance of GetAllAddressesResponse from a dict
get_all_addresses_response_from_dict = GetAllAddressesResponse.from_dict(get_all_addresses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


