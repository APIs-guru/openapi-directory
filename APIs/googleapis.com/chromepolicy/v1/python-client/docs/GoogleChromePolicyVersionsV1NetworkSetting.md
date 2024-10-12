# GoogleChromePolicyVersionsV1NetworkSetting

A network setting contains network configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_schema** | **str** | The fully qualified name of the network setting. | [optional] 
**value** | **Dict[str, object]** | The value of the network setting. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_network_setting import GoogleChromePolicyVersionsV1NetworkSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1NetworkSetting from a JSON string
google_chrome_policy_versions_v1_network_setting_instance = GoogleChromePolicyVersionsV1NetworkSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1NetworkSetting.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_network_setting_dict = google_chrome_policy_versions_v1_network_setting_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1NetworkSetting from a dict
google_chrome_policy_versions_v1_network_setting_from_dict = GoogleChromePolicyVersionsV1NetworkSetting.from_dict(google_chrome_policy_versions_v1_network_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


