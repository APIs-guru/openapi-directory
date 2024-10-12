# AuthorizationPropertiesFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_key** | **str** | Gets or sets the authorization key | [optional] 
**authorization_use_status** | **str** | Gets or sets AuthorizationUseStatus | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.authorization_properties_format import AuthorizationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationPropertiesFormat from a JSON string
authorization_properties_format_instance = AuthorizationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(AuthorizationPropertiesFormat.to_json())

# convert the object into a dict
authorization_properties_format_dict = authorization_properties_format_instance.to_dict()
# create an instance of AuthorizationPropertiesFormat from a dict
authorization_properties_format_from_dict = AuthorizationPropertiesFormat.from_dict(authorization_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


