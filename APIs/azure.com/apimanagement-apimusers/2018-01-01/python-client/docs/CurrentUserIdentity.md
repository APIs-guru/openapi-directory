# CurrentUserIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | API Management service user id. | [optional] 

## Example

```python
from openapi_client.models.current_user_identity import CurrentUserIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentUserIdentity from a JSON string
current_user_identity_instance = CurrentUserIdentity.from_json(json)
# print the JSON string representation of the object
print(CurrentUserIdentity.to_json())

# convert the object into a dict
current_user_identity_dict = current_user_identity_instance.to_dict()
# create an instance of CurrentUserIdentity from a dict
current_user_identity_from_dict = CurrentUserIdentity.from_dict(current_user_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


