# CustomizationPolicyProperties

The properties of Customization policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Policy description | [optional] 
**private_cloud_id** | **str** | The Private cloud id | [optional] 
**specification** | [**CustomizationSpecification**](CustomizationSpecification.md) |  | [optional] 
**type** | **str** | The type of customization (Linux or Windows) | [optional] 
**version** | **str** | Policy version | [optional] 

## Example

```python
from openapi_client.models.customization_policy_properties import CustomizationPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationPolicyProperties from a JSON string
customization_policy_properties_instance = CustomizationPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(CustomizationPolicyProperties.to_json())

# convert the object into a dict
customization_policy_properties_dict = customization_policy_properties_instance.to_dict()
# create an instance of CustomizationPolicyProperties from a dict
customization_policy_properties_from_dict = CustomizationPolicyProperties.from_dict(customization_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


