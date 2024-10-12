# CustomizationPolicy

The virtual machine customization policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Customization policy azure id | [optional] 
**location** | **str** | Azure region | [optional] 
**name** | **str** | Customization policy name | [optional] [readonly] 
**properties** | [**CustomizationPolicyProperties**](CustomizationPolicyProperties.md) |  | [optional] 
**type** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.customization_policy import CustomizationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationPolicy from a JSON string
customization_policy_instance = CustomizationPolicy.from_json(json)
# print the JSON string representation of the object
print(CustomizationPolicy.to_json())

# convert the object into a dict
customization_policy_dict = customization_policy_instance.to_dict()
# create an instance of CustomizationPolicy from a dict
customization_policy_from_dict = CustomizationPolicy.from_dict(customization_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


