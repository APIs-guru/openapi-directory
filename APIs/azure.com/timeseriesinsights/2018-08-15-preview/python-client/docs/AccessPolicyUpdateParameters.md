# AccessPolicyUpdateParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AccessPolicyMutableProperties**](AccessPolicyMutableProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.access_policy_update_parameters import AccessPolicyUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AccessPolicyUpdateParameters from a JSON string
access_policy_update_parameters_instance = AccessPolicyUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AccessPolicyUpdateParameters.to_json())

# convert the object into a dict
access_policy_update_parameters_dict = access_policy_update_parameters_instance.to_dict()
# create an instance of AccessPolicyUpdateParameters from a dict
access_policy_update_parameters_from_dict = AccessPolicyUpdateParameters.from_dict(access_policy_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


