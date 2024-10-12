# ConfigurationProperty



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | 
**label** | **str** |  | 
**name** | **str** |  | 
**type** | **str** |  | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.configuration_property import ConfigurationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationProperty from a JSON string
configuration_property_instance = ConfigurationProperty.from_json(json)
# print the JSON string representation of the object
print(ConfigurationProperty.to_json())

# convert the object into a dict
configuration_property_dict = configuration_property_instance.to_dict()
# create an instance of ConfigurationProperty from a dict
configuration_property_from_dict = ConfigurationProperty.from_dict(configuration_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


