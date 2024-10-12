# PolicyProviderSpecificDetails

Base class for Provider specific details for policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the class type. Overridden in derived classes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_provider_specific_details import PolicyProviderSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyProviderSpecificDetails from a JSON string
policy_provider_specific_details_instance = PolicyProviderSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(PolicyProviderSpecificDetails.to_json())

# convert the object into a dict
policy_provider_specific_details_dict = policy_provider_specific_details_instance.to_dict()
# create an instance of PolicyProviderSpecificDetails from a dict
policy_provider_specific_details_from_dict = PolicyProviderSpecificDetails.from_dict(policy_provider_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


