# ManagedProperty

Managed property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **object** | The default value of the property. BUNDLE_ARRAY properties don&#39;t have a default value. | [optional] 
**description** | **str** | A longer description of the property, providing more detail of what it affects. Localized. | [optional] 
**entries** | [**List[ManagedPropertyEntry]**](ManagedPropertyEntry.md) | For CHOICE or MULTISELECT properties, the list of possible entries. | [optional] 
**key** | **str** | The unique key that the app uses to identify the property, e.g. \&quot;com.google.android.gm.fieldname\&quot;. | [optional] 
**nested_properties** | [**List[ManagedProperty]**](ManagedProperty.md) | For BUNDLE_ARRAY properties, the list of nested properties. A BUNDLE_ARRAY property is at most two levels deep. | [optional] 
**title** | **str** | The name of the property. Localized. | [optional] 
**type** | **str** | The type of the property. | [optional] 

## Example

```python
from openapi_client.models.managed_property import ManagedProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedProperty from a JSON string
managed_property_instance = ManagedProperty.from_json(json)
# print the JSON string representation of the object
print(ManagedProperty.to_json())

# convert the object into a dict
managed_property_dict = managed_property_instance.to_dict()
# create an instance of ManagedProperty from a dict
managed_property_from_dict = ManagedProperty.from_dict(managed_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


