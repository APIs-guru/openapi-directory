# ExpiredCert


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hash** | **str** |  | [optional] 
**file_name** | **str** |  | [optional] 
**public_key** | [**PublicKey**](PublicKey.md) |  | [optional] 
**subject_name** | **str** |  | [optional] 
**thumb_print** | **str** |  | [optional] 
**valid_from** | **str** |  | [optional] 
**valid_to** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.expired_cert import ExpiredCert

# TODO update the JSON string below
json = "{}"
# create an instance of ExpiredCert from a JSON string
expired_cert_instance = ExpiredCert.from_json(json)
# print the JSON string representation of the object
print(ExpiredCert.to_json())

# convert the object into a dict
expired_cert_dict = expired_cert_instance.to_dict()
# create an instance of ExpiredCert from a dict
expired_cert_from_dict = ExpiredCert.from_dict(expired_cert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


