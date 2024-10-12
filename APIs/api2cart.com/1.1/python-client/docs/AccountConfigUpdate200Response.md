# AccountConfigUpdate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**AccountConfigUpdate200ResponseResult**](AccountConfigUpdate200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_config_update200_response import AccountConfigUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AccountConfigUpdate200Response from a JSON string
account_config_update200_response_instance = AccountConfigUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(AccountConfigUpdate200Response.to_json())

# convert the object into a dict
account_config_update200_response_dict = account_config_update200_response_instance.to_dict()
# create an instance of AccountConfigUpdate200Response from a dict
account_config_update200_response_from_dict = AccountConfigUpdate200Response.from_dict(account_config_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


