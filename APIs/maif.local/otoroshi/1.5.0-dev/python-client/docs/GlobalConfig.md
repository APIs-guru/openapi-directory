# GlobalConfig

The global config object of Otoroshi, used to customize settings of the current Otoroshi instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts_emails** | **List[str]** | Email addresses that will receive all Otoroshi alert events | 
**alerts_webhooks** | [**List[Webhook]**](Webhook.md) | Webhook that will receive all Otoroshi alert events | 
**analytics_webhooks** | [**List[Webhook]**](Webhook.md) | Webhook that will receive all internal Otoroshi events | 
**api_read_only** | **bool** | If enabled, Admin API won&#39;t be able to write/update/delete entities | 
**auto_link_to_default_group** | **bool** | If not defined, every new service descriptor will be added to the default group | 
**backoffice_auth0_config** | [**Auth0Config**](Auth0Config.md) |  | [optional] 
**clever_settings** | [**CleverSettings**](CleverSettings.md) |  | [optional] 
**elastic_reads_config** | [**ElasticConfig**](ElasticConfig.md) |  | [optional] 
**elastic_writes_configs** | [**List[ElasticConfig]**](ElasticConfig.md) | Configs. for Elastic writes | [optional] 
**endless_ip_addresses** | **List[str]** | IP addresses for which any request to Otoroshi will respond with 128 Gb of zeros | 
**ip_filtering** | [**IpFiltering**](IpFiltering.md) |  | 
**limit_concurrent_requests** | **bool** | If enabled, Otoroshi will reject new request if too much at the same time | 
**lines** | **List[str]** | Possibles lines for Otoroshi | [optional] 
**mailer_settings** | [**MailerSettings**](MailerSettings.md) |  | [optional] 
**max_concurrent_requests** | **int** | The number of authorized request processed at the same time | 
**max_http10_response_size** | **int** | The max size in bytes of an HTTP 1.0 response | [optional] 
**max_logs_size** | **int** | Number of events kept locally | [optional] 
**middle_fingers** | **bool** | Use middle finger emoji as a response character for endless HTTP responses | [optional] 
**per_ip_throttling_quota** | **int** | Authorized number of calls per second globally per IP address, measured on 10 seconds | 
**private_apps_auth0_config** | [**Auth0Config**](Auth0Config.md) |  | [optional] 
**stream_entity_only** | **bool** | HTTP will be streamed only. Doesn&#39;t work with old browsers | 
**throttling_quota** | **int** | Authorized number of calls per second globally, measured on 10 seconds | 
**u2f_login_only** | **bool** | If enabled, login to backoffice through Auth0 will be disabled | 
**use_circuit_breakers** | **bool** | If enabled, services will be authorized to use circuit breakers | 

## Example

```python
from openapi_client.models.global_config import GlobalConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalConfig from a JSON string
global_config_instance = GlobalConfig.from_json(json)
# print the JSON string representation of the object
print(GlobalConfig.to_json())

# convert the object into a dict
global_config_dict = global_config_instance.to_dict()
# create an instance of GlobalConfig from a dict
global_config_from_dict = GlobalConfig.from_dict(global_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


