# ManagementConfigurationPropertiesList

the list of ManagementConfiguration response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ManagementConfiguration]**](ManagementConfiguration.md) | List of Management Configuration properties within the subscription. | [optional] 

## Example

```python
from openapi_client.models.management_configuration_properties_list import ManagementConfigurationPropertiesList

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementConfigurationPropertiesList from a JSON string
management_configuration_properties_list_instance = ManagementConfigurationPropertiesList.from_json(json)
# print the JSON string representation of the object
print(ManagementConfigurationPropertiesList.to_json())

# convert the object into a dict
management_configuration_properties_list_dict = management_configuration_properties_list_instance.to_dict()
# create an instance of ManagementConfigurationPropertiesList from a dict
management_configuration_properties_list_from_dict = ManagementConfigurationPropertiesList.from_dict(management_configuration_properties_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


