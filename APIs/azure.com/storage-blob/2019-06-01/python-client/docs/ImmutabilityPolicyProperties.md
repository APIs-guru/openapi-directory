# ImmutabilityPolicyProperties

The properties of an ImmutabilityPolicy of a blob container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ImmutabilityPolicy Etag. | [optional] [readonly] 
**properties** | [**ImmutabilityPolicyProperty**](ImmutabilityPolicyProperty.md) |  | [optional] 
**update_history** | [**List[UpdateHistoryProperty]**](UpdateHistoryProperty.md) | The ImmutabilityPolicy update history of the blob container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.immutability_policy_properties import ImmutabilityPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ImmutabilityPolicyProperties from a JSON string
immutability_policy_properties_instance = ImmutabilityPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ImmutabilityPolicyProperties.to_json())

# convert the object into a dict
immutability_policy_properties_dict = immutability_policy_properties_instance.to_dict()
# create an instance of ImmutabilityPolicyProperties from a dict
immutability_policy_properties_from_dict = ImmutabilityPolicyProperties.from_dict(immutability_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


