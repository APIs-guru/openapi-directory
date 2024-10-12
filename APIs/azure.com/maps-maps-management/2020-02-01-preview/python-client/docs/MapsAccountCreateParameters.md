# MapsAccountCreateParameters

Parameters used to create a new Maps Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the resource. | 
**sku** | [**Sku**](Sku.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). Each tag must have a key no greater than 128 characters and value no greater than 256 characters. | [optional] 

## Example

```python
from openapi_client.models.maps_account_create_parameters import MapsAccountCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of MapsAccountCreateParameters from a JSON string
maps_account_create_parameters_instance = MapsAccountCreateParameters.from_json(json)
# print the JSON string representation of the object
print(MapsAccountCreateParameters.to_json())

# convert the object into a dict
maps_account_create_parameters_dict = maps_account_create_parameters_instance.to_dict()
# create an instance of MapsAccountCreateParameters from a dict
maps_account_create_parameters_from_dict = MapsAccountCreateParameters.from_dict(maps_account_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


