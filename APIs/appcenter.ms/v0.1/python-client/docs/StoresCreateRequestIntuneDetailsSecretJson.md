# StoresCreateRequestIntuneDetailsSecretJson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | the id token of user | [optional] 
**refresh_token** | **str** | the refresh token for user | [optional] 
**refresh_token_expiry** | **str** | the expiry of refresh token | [optional] 

## Example

```python
from openapi_client.models.stores_create_request_intune_details_secret_json import StoresCreateRequestIntuneDetailsSecretJson

# TODO update the JSON string below
json = "{}"
# create an instance of StoresCreateRequestIntuneDetailsSecretJson from a JSON string
stores_create_request_intune_details_secret_json_instance = StoresCreateRequestIntuneDetailsSecretJson.from_json(json)
# print the JSON string representation of the object
print(StoresCreateRequestIntuneDetailsSecretJson.to_json())

# convert the object into a dict
stores_create_request_intune_details_secret_json_dict = stores_create_request_intune_details_secret_json_instance.to_dict()
# create an instance of StoresCreateRequestIntuneDetailsSecretJson from a dict
stores_create_request_intune_details_secret_json_from_dict = StoresCreateRequestIntuneDetailsSecretJson.from_dict(stores_create_request_intune_details_secret_json_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


