# BaiduCredential

Description of a NotificationHub BaiduCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BaiduCredentialProperties**](BaiduCredentialProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.baidu_credential import BaiduCredential

# TODO update the JSON string below
json = "{}"
# create an instance of BaiduCredential from a JSON string
baidu_credential_instance = BaiduCredential.from_json(json)
# print the JSON string representation of the object
print(BaiduCredential.to_json())

# convert the object into a dict
baidu_credential_dict = baidu_credential_instance.to_dict()
# create an instance of BaiduCredential from a dict
baidu_credential_from_dict = BaiduCredential.from_dict(baidu_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


