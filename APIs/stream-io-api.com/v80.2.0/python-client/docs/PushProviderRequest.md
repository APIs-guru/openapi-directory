# PushProviderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apn_auth_key** | **str** |  | [optional] 
**apn_auth_type** | **str** |  | [optional] 
**apn_development** | **bool** |  | [optional] 
**apn_host** | **str** |  | [optional] 
**apn_key_id** | **str** |  | [optional] 
**apn_notification_template** | **str** |  | [optional] 
**apn_p12_cert** | **str** |  | [optional] 
**apn_team_id** | **str** |  | [optional] 
**apn_topic** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**disabled_at** | **datetime** |  | [optional] 
**disabled_reason** | **str** |  | [optional] 
**firebase_apn_template** | **str** |  | [optional] 
**firebase_credentials** | **str** |  | [optional] 
**firebase_data_template** | **str** |  | [optional] 
**firebase_notification_template** | **str** |  | [optional] 
**firebase_server_key** | **str** |  | [optional] 
**huawei_app_id** | **str** |  | [optional] 
**huawei_app_secret** | **str** |  | [optional] 
**name** | **str** |  | 
**type** | **int** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**xiaomi_app_secret** | **str** |  | [optional] 
**xiaomi_package_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.push_provider_request import PushProviderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PushProviderRequest from a JSON string
push_provider_request_instance = PushProviderRequest.from_json(json)
# print the JSON string representation of the object
print(PushProviderRequest.to_json())

# convert the object into a dict
push_provider_request_dict = push_provider_request_instance.to_dict()
# create an instance of PushProviderRequest from a dict
push_provider_request_from_dict = PushProviderRequest.from_dict(push_provider_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


