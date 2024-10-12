# PushProvider


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
**created_at** | **datetime** |  | 
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
**type** | **int** |  | 
**updated_at** | **datetime** |  | 
**xiaomi_app_secret** | **str** |  | [optional] 
**xiaomi_package_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.push_provider import PushProvider

# TODO update the JSON string below
json = "{}"
# create an instance of PushProvider from a JSON string
push_provider_instance = PushProvider.from_json(json)
# print the JSON string representation of the object
print(PushProvider.to_json())

# convert the object into a dict
push_provider_dict = push_provider_instance.to_dict()
# create an instance of PushProvider from a dict
push_provider_from_dict = PushProvider.from_dict(push_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


