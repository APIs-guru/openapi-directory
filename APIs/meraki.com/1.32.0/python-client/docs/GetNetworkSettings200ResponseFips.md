# GetNetworkSettings200ResponseFips

A hash of FIPS options applied to the Network

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables / disables FIPS on the network. | [optional] 

## Example

```python
from openapi_client.models.get_network_settings200_response_fips import GetNetworkSettings200ResponseFips

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSettings200ResponseFips from a JSON string
get_network_settings200_response_fips_instance = GetNetworkSettings200ResponseFips.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSettings200ResponseFips.to_json())

# convert the object into a dict
get_network_settings200_response_fips_dict = get_network_settings200_response_fips_instance.to_dict()
# create an instance of GetNetworkSettings200ResponseFips from a dict
get_network_settings200_response_fips_from_dict = GetNetworkSettings200ResponseFips.from_dict(get_network_settings200_response_fips_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


