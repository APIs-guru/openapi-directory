# AccessPolicyCreateOrUpdateParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AccessPolicyResourceProperties**](AccessPolicyResourceProperties.md) |  | 

## Example

```python
from openapi_client.models.access_policy_create_or_update_parameters import AccessPolicyCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AccessPolicyCreateOrUpdateParameters from a JSON string
access_policy_create_or_update_parameters_instance = AccessPolicyCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AccessPolicyCreateOrUpdateParameters.to_json())

# convert the object into a dict
access_policy_create_or_update_parameters_dict = access_policy_create_or_update_parameters_instance.to_dict()
# create an instance of AccessPolicyCreateOrUpdateParameters from a dict
access_policy_create_or_update_parameters_from_dict = AccessPolicyCreateOrUpdateParameters.from_dict(access_policy_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


