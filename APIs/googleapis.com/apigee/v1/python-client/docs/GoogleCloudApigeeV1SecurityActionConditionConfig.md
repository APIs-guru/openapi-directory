# GoogleCloudApigeeV1SecurityActionConditionConfig

The following are a list of conditions. A valid SecurityAction must contain at least one condition. Within a condition, each element is ORed. Across conditions elements are ANDed. For example if a SecurityAction has the following: ip_address_ranges: [\"ip1\", \"ip2\"] and bot_reasons: [\"Flooder\", \"Robot Abuser\"] then this is interpreted as: enforce the action if the incoming request has ((ip_address_ranges = \"ip1\" OR ip_address_ranges = \"ip2\") AND (bot_reasons=\"Flooder\" OR bot_reasons=\"Robot Abuser\")). Conditions other than ip_address_ranges and bot_reasons cannot be ANDed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_tokens** | **List[str]** | Optional. A list of access_tokens. Limit 1000 per action. | [optional] 
**api_keys** | **List[str]** | Optional. A list of API keys. Limit 1000 per action. | [optional] 
**api_products** | **List[str]** | Optional. A list of API Products. Limit 1000 per action. | [optional] 
**bot_reasons** | **List[str]** | Optional. A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content Scraper, OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper, Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google. | [optional] 
**developer_apps** | **List[str]** | Optional. A list of developer apps. Limit 1000 per action. | [optional] 
**developers** | **List[str]** | Optional. A list of developers. Limit 1000 per action. | [optional] 
**ip_address_ranges** | **List[str]** | Optional. A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. | [optional] 
**user_agents** | **List[str]** | Optional. A list of user agents to deny. We look for exact matches. Limit 50 per action. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_action_condition_config import GoogleCloudApigeeV1SecurityActionConditionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityActionConditionConfig from a JSON string
google_cloud_apigee_v1_security_action_condition_config_instance = GoogleCloudApigeeV1SecurityActionConditionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityActionConditionConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_action_condition_config_dict = google_cloud_apigee_v1_security_action_condition_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityActionConditionConfig from a dict
google_cloud_apigee_v1_security_action_condition_config_from_dict = GoogleCloudApigeeV1SecurityActionConditionConfig.from_dict(google_cloud_apigee_v1_security_action_condition_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


