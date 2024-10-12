# MapsAccountUpdateParameters

Parameters used to update an existing Maps Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. | [optional] 

## Example

```python
from openapi_client.models.maps_account_update_parameters import MapsAccountUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of MapsAccountUpdateParameters from a JSON string
maps_account_update_parameters_instance = MapsAccountUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(MapsAccountUpdateParameters.to_json())

# convert the object into a dict
maps_account_update_parameters_dict = maps_account_update_parameters_instance.to_dict()
# create an instance of MapsAccountUpdateParameters from a dict
maps_account_update_parameters_from_dict = MapsAccountUpdateParameters.from_dict(maps_account_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


