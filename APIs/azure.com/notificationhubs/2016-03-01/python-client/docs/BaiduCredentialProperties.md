# BaiduCredentialProperties

Description of a NotificationHub BaiduCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baidu_api_key** | **str** | Baidu Api Key. | [optional] 
**baidu_end_point** | **str** | Baidu Endpoint. | [optional] 
**baidu_secret_key** | **str** | Baidu Secret Key | [optional] 

## Example

```python
from openapi_client.models.baidu_credential_properties import BaiduCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BaiduCredentialProperties from a JSON string
baidu_credential_properties_instance = BaiduCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(BaiduCredentialProperties.to_json())

# convert the object into a dict
baidu_credential_properties_dict = baidu_credential_properties_instance.to_dict()
# create an instance of BaiduCredentialProperties from a dict
baidu_credential_properties_from_dict = BaiduCredentialProperties.from_dict(baidu_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


