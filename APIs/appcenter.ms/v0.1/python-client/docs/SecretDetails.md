# SecretDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | the id token of user | [optional] 
**refresh_token** | **str** | the refresh token for user | [optional] 
**refresh_token_expiry** | **str** | the expiry of refresh token | [optional] 

## Example

```python
from openapi_client.models.secret_details import SecretDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SecretDetails from a JSON string
secret_details_instance = SecretDetails.from_json(json)
# print the JSON string representation of the object
print(SecretDetails.to_json())

# convert the object into a dict
secret_details_dict = secret_details_instance.to_dict()
# create an instance of SecretDetails from a dict
secret_details_from_dict = SecretDetails.from_dict(secret_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


