# SignInBehavior

Controls sign-in behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_condition** | **str** | When to redirect sign-ins to the IdP. | [optional] 

## Example

```python
from openapi_client.models.sign_in_behavior import SignInBehavior

# TODO update the JSON string below
json = "{}"
# create an instance of SignInBehavior from a JSON string
sign_in_behavior_instance = SignInBehavior.from_json(json)
# print the JSON string representation of the object
print(SignInBehavior.to_json())

# convert the object into a dict
sign_in_behavior_dict = sign_in_behavior_instance.to_dict()
# create an instance of SignInBehavior from a dict
sign_in_behavior_from_dict = SignInBehavior.from_dict(sign_in_behavior_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


