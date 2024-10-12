# ManagedProperty

A managed property of a managed configuration. The property must match one of the properties in the app restrictions schema of the product. Exactly one of the value fields must be populated, and it must match the property's type in the app restrictions schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The unique key that identifies the property. | [optional] 
**value_bool** | **bool** | The boolean value - this will only be present if type of the property is bool. | [optional] 
**value_bundle** | [**ManagedPropertyBundle**](ManagedPropertyBundle.md) |  | [optional] 
**value_bundle_array** | [**List[ManagedPropertyBundle]**](ManagedPropertyBundle.md) | The list of bundles of properties - this will only be present if type of the property is bundle_array. | [optional] 
**value_integer** | **int** | The integer value - this will only be present if type of the property is integer. | [optional] 
**value_string** | **str** | The string value - this will only be present if type of the property is string, choice or hidden. | [optional] 
**value_string_array** | **List[str]** | The list of string values - this will only be present if type of the property is multiselect. | [optional] 

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


