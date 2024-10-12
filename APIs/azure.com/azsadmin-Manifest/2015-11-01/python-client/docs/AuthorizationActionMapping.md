# AuthorizationActionMapping

The linked resource access checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desired** | **str** | The desired action name. | [optional] 
**original** | **str** | The original action name. | [optional] 

## Example

```python
from openapi_client.models.authorization_action_mapping import AuthorizationActionMapping

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationActionMapping from a JSON string
authorization_action_mapping_instance = AuthorizationActionMapping.from_json(json)
# print the JSON string representation of the object
print(AuthorizationActionMapping.to_json())

# convert the object into a dict
authorization_action_mapping_dict = authorization_action_mapping_instance.to_dict()
# create an instance of AuthorizationActionMapping from a dict
authorization_action_mapping_from_dict = AuthorizationActionMapping.from_dict(authorization_action_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


