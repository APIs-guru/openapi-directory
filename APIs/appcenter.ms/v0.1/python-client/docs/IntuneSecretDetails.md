# IntuneSecretDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | the id token of user | [optional] 
**refresh_token** | **str** | the refresh token for user | [optional] 
**refresh_token_expiry** | **str** | the expiry of refresh token | [optional] 

## Example

```python
from openapi_client.models.intune_secret_details import IntuneSecretDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneSecretDetails from a JSON string
intune_secret_details_instance = IntuneSecretDetails.from_json(json)
# print the JSON string representation of the object
print(IntuneSecretDetails.to_json())

# convert the object into a dict
intune_secret_details_dict = intune_secret_details_instance.to_dict()
# create an instance of IntuneSecretDetails from a dict
intune_secret_details_from_dict = IntuneSecretDetails.from_dict(intune_secret_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


