# GoogleChromePolicyVersionsV1DefineNetworkResponse

Response object for creating a network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_id** | **str** | Network ID of the new created network. | [optional] 
**settings** | [**List[GoogleChromePolicyVersionsV1NetworkSetting]**](GoogleChromePolicyVersionsV1NetworkSetting.md) | Detailed network settings of the new created network | [optional] 
**target_resource** | **str** | The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit (\&quot;orgunits/{orgunit_id}\&quot;) | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_define_network_response import GoogleChromePolicyVersionsV1DefineNetworkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1DefineNetworkResponse from a JSON string
google_chrome_policy_versions_v1_define_network_response_instance = GoogleChromePolicyVersionsV1DefineNetworkResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1DefineNetworkResponse.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_define_network_response_dict = google_chrome_policy_versions_v1_define_network_response_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1DefineNetworkResponse from a dict
google_chrome_policy_versions_v1_define_network_response_from_dict = GoogleChromePolicyVersionsV1DefineNetworkResponse.from_dict(google_chrome_policy_versions_v1_define_network_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


