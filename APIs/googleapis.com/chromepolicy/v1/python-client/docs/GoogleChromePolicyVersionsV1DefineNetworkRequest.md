# GoogleChromePolicyVersionsV1DefineNetworkRequest

Request object for creating a new network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the new created network. | [optional] 
**settings** | [**List[GoogleChromePolicyVersionsV1NetworkSetting]**](GoogleChromePolicyVersionsV1NetworkSetting.md) | Required. Detailed network settings. | [optional] 
**target_resource** | **str** | Required. The target resource on which this new network will be defined. The following resources are supported: * Organizational Unit (\&quot;orgunits/{orgunit_id}\&quot;) | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_define_network_request import GoogleChromePolicyVersionsV1DefineNetworkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1DefineNetworkRequest from a JSON string
google_chrome_policy_versions_v1_define_network_request_instance = GoogleChromePolicyVersionsV1DefineNetworkRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1DefineNetworkRequest.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_define_network_request_dict = google_chrome_policy_versions_v1_define_network_request_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1DefineNetworkRequest from a dict
google_chrome_policy_versions_v1_define_network_request_from_dict = GoogleChromePolicyVersionsV1DefineNetworkRequest.from_dict(google_chrome_policy_versions_v1_define_network_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


