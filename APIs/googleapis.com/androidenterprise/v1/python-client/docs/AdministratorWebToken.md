# AdministratorWebToken

A token authorizing an admin to access an iframe.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | An opaque token to be passed to the Play front-end to generate an iframe. | [optional] 

## Example

```python
from openapi_client.models.administrator_web_token import AdministratorWebToken

# TODO update the JSON string below
json = "{}"
# create an instance of AdministratorWebToken from a JSON string
administrator_web_token_instance = AdministratorWebToken.from_json(json)
# print the JSON string representation of the object
print(AdministratorWebToken.to_json())

# convert the object into a dict
administrator_web_token_dict = administrator_web_token_instance.to_dict()
# create an instance of AdministratorWebToken from a dict
administrator_web_token_from_dict = AdministratorWebToken.from_dict(administrator_web_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


