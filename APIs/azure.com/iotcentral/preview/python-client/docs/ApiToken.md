# ApiToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roles** | **List[str]** | Roles that the permission has been granted permission to. | 
**expiry** | **datetime** | String-formatted date representing the time when the token expires | [optional] 
**id** | **str** | Unique ID of the api token. | [optional] [readonly] 
**token** | **str** | Value of the api token. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_token import ApiToken

# TODO update the JSON string below
json = "{}"
# create an instance of ApiToken from a JSON string
api_token_instance = ApiToken.from_json(json)
# print the JSON string representation of the object
print(ApiToken.to_json())

# convert the object into a dict
api_token_dict = api_token_instance.to_dict()
# create an instance of ApiToken from a dict
api_token_from_dict = ApiToken.from_dict(api_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


