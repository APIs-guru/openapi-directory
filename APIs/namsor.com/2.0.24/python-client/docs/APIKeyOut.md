# APIKeyOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** | The API Key has admin role. | [optional] 
**anonymized** | **bool** | The API Key is anonymized (using SHA-252 digest for logging). Set learnable&#x3D;false and anonymized&#x3D;true for highest privacy (ie. to forget data as it&#39;s processed). | [optional] 
**api_key** | **str** | The user API Key. | [optional] 
**corporate** | **bool** | The API Key has role corporate (ex SWIFT payments instead of Stripe payments). | [optional] 
**disabled** | **bool** | The API Key is temporarily or permanently disabled. | [optional] 
**learnable** | **bool** | The API Key is learnable (without assuming truthfulness) for machine learning. Set learnable&#x3D;false and anonymized&#x3D;true for highest privacy (ie. to forget data as it&#39;s processed). | [optional] 
**partner** | **bool** | The API Key has partner role. | [optional] 
**striped** | **bool** | The API Key is associated to a valid Stripe account. | [optional] 
**user_id** | **str** | The user identifier. | [optional] 
**vetted** | **bool** | The API Key is vetted (assumed truthful) for machine learning. | [optional] 

## Example

```python
from openapi_client.models.api_key_out import APIKeyOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIKeyOut from a JSON string
api_key_out_instance = APIKeyOut.from_json(json)
# print the JSON string representation of the object
print(APIKeyOut.to_json())

# convert the object into a dict
api_key_out_dict = api_key_out_instance.to_dict()
# create an instance of APIKeyOut from a dict
api_key_out_from_dict = APIKeyOut.from_dict(api_key_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


