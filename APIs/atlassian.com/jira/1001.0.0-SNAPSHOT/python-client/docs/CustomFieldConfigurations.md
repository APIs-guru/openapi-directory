# CustomFieldConfigurations

Details of configurations for a custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurations** | [**List[ContextualConfiguration]**](ContextualConfiguration.md) | The list of custom field configuration details. | 

## Example

```python
from openapi_client.models.custom_field_configurations import CustomFieldConfigurations

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldConfigurations from a JSON string
custom_field_configurations_instance = CustomFieldConfigurations.from_json(json)
# print the JSON string representation of the object
print(CustomFieldConfigurations.to_json())

# convert the object into a dict
custom_field_configurations_dict = custom_field_configurations_instance.to_dict()
# create an instance of CustomFieldConfigurations from a dict
custom_field_configurations_from_dict = CustomFieldConfigurations.from_dict(custom_field_configurations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


