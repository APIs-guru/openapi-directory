# ManagedPropertyBundle

A bundle of managed properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_property** | [**List[ManagedProperty]**](ManagedProperty.md) | The list of managed properties. | [optional] 

## Example

```python
from openapi_client.models.managed_property_bundle import ManagedPropertyBundle

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedPropertyBundle from a JSON string
managed_property_bundle_instance = ManagedPropertyBundle.from_json(json)
# print the JSON string representation of the object
print(ManagedPropertyBundle.to_json())

# convert the object into a dict
managed_property_bundle_dict = managed_property_bundle_instance.to_dict()
# create an instance of ManagedPropertyBundle from a dict
managed_property_bundle_from_dict = ManagedPropertyBundle.from_dict(managed_property_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


