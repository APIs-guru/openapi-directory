# SupportedProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_properties** | [**List[SupportedPropertyChildPropertiesInner]**](SupportedPropertyChildPropertiesInner.md) | List of child properties of the unified property. | [optional] 
**unified_property** | **str** | Name of the property in our Unified API. | [optional] 

## Example

```python
from openapi_client.models.supported_property import SupportedProperty

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedProperty from a JSON string
supported_property_instance = SupportedProperty.from_json(json)
# print the JSON string representation of the object
print(SupportedProperty.to_json())

# convert the object into a dict
supported_property_dict = supported_property_instance.to_dict()
# create an instance of SupportedProperty from a dict
supported_property_from_dict = SupportedProperty.from_dict(supported_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


