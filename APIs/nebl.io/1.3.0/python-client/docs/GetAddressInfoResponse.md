# GetAddressInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The Neblio Address | [optional] 
**utxos** | [**List[GetAddressInfoResponseUtxosInner]**](GetAddressInfoResponseUtxosInner.md) | Array of UTXOs held at this address. | [optional] 

## Example

```python
from openapi_client.models.get_address_info_response import GetAddressInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetAddressInfoResponse from a JSON string
get_address_info_response_instance = GetAddressInfoResponse.from_json(json)
# print the JSON string representation of the object
print(GetAddressInfoResponse.to_json())

# convert the object into a dict
get_address_info_response_dict = get_address_info_response_instance.to_dict()
# create an instance of GetAddressInfoResponse from a dict
get_address_info_response_from_dict = GetAddressInfoResponse.from_dict(get_address_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


