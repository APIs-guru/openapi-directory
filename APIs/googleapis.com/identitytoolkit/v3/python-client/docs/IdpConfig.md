# IdpConfig

Template for a single idp configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | OAuth2 client ID. | [optional] 
**enabled** | **bool** | Whether this IDP is enabled. | [optional] 
**experiment_percent** | **int** | Percent of users who will be prompted/redirected federated login for this IDP. | [optional] 
**provider** | **str** | OAuth2 provider. | [optional] 
**secret** | **str** | OAuth2 client secret. | [optional] 
**whitelisted_audiences** | **List[str]** | Whitelisted client IDs for audience check. | [optional] 

## Example

```python
from openapi_client.models.idp_config import IdpConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IdpConfig from a JSON string
idp_config_instance = IdpConfig.from_json(json)
# print the JSON string representation of the object
print(IdpConfig.to_json())

# convert the object into a dict
idp_config_dict = idp_config_instance.to_dict()
# create an instance of IdpConfig from a dict
idp_config_from_dict = IdpConfig.from_dict(idp_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


