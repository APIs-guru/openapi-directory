# CustomizationSpecification

The specification for Customization Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**CustomizationIdentity**](CustomizationIdentity.md) |  | [optional] 
**nic_settings** | [**List[CustomizationNicSetting]**](CustomizationNicSetting.md) | Network interface settings | [optional] 

## Example

```python
from openapi_client.models.customization_specification import CustomizationSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationSpecification from a JSON string
customization_specification_instance = CustomizationSpecification.from_json(json)
# print the JSON string representation of the object
print(CustomizationSpecification.to_json())

# convert the object into a dict
customization_specification_dict = customization_specification_instance.to_dict()
# create an instance of CustomizationSpecification from a dict
customization_specification_from_dict = CustomizationSpecification.from_dict(customization_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


