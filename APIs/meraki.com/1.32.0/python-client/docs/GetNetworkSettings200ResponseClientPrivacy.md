# GetNetworkSettings200ResponseClientPrivacy

Privacy settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_data_before** | **datetime** | The date to expire the data before | [optional] 
**expire_data_older_than** | **int** | The number of days, weeks, or months in Epoch time to expire the data before | [optional] 

## Example

```python
from openapi_client.models.get_network_settings200_response_client_privacy import GetNetworkSettings200ResponseClientPrivacy

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSettings200ResponseClientPrivacy from a JSON string
get_network_settings200_response_client_privacy_instance = GetNetworkSettings200ResponseClientPrivacy.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSettings200ResponseClientPrivacy.to_json())

# convert the object into a dict
get_network_settings200_response_client_privacy_dict = get_network_settings200_response_client_privacy_instance.to_dict()
# create an instance of GetNetworkSettings200ResponseClientPrivacy from a dict
get_network_settings200_response_client_privacy_from_dict = GetNetworkSettings200ResponseClientPrivacy.from_dict(get_network_settings200_response_client_privacy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


