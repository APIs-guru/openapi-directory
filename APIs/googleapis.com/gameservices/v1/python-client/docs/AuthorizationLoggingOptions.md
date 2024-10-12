# AuthorizationLoggingOptions

Authorization-related information used by Cloud Audit Logging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_type** | **str** | The type of the permission that was checked. | [optional] 

## Example

```python
from openapi_client.models.authorization_logging_options import AuthorizationLoggingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationLoggingOptions from a JSON string
authorization_logging_options_instance = AuthorizationLoggingOptions.from_json(json)
# print the JSON string representation of the object
print(AuthorizationLoggingOptions.to_json())

# convert the object into a dict
authorization_logging_options_dict = authorization_logging_options_instance.to_dict()
# create an instance of AuthorizationLoggingOptions from a dict
authorization_logging_options_from_dict = AuthorizationLoggingOptions.from_dict(authorization_logging_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


