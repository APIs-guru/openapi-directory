# ManagedConfiguration

A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_variables** | [**ConfigurationVariables**](ConfigurationVariables.md) |  | [optional] 
**kind** | **str** | Deprecated. | [optional] 
**managed_property** | [**List[ManagedProperty]**](ManagedProperty.md) | The set of managed properties for this configuration. | [optional] 
**product_id** | **str** | The ID of the product that the managed configuration is for, e.g. \&quot;app:com.google.android.gm\&quot;. | [optional] 

## Example

```python
from openapi_client.models.managed_configuration import ManagedConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedConfiguration from a JSON string
managed_configuration_instance = ManagedConfiguration.from_json(json)
# print the JSON string representation of the object
print(ManagedConfiguration.to_json())

# convert the object into a dict
managed_configuration_dict = managed_configuration_instance.to_dict()
# create an instance of ManagedConfiguration from a dict
managed_configuration_from_dict = ManagedConfiguration.from_dict(managed_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


