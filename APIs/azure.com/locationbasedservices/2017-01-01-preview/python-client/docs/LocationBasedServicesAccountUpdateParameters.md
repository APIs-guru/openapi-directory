# LocationBasedServicesAccountUpdateParameters

Parameters used to update an existing Location Based Services Account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. | [optional] 

## Example

```python
from openapi_client.models.location_based_services_account_update_parameters import LocationBasedServicesAccountUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesAccountUpdateParameters from a JSON string
location_based_services_account_update_parameters_instance = LocationBasedServicesAccountUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesAccountUpdateParameters.to_json())

# convert the object into a dict
location_based_services_account_update_parameters_dict = location_based_services_account_update_parameters_instance.to_dict()
# create an instance of LocationBasedServicesAccountUpdateParameters from a dict
location_based_services_account_update_parameters_from_dict = LocationBasedServicesAccountUpdateParameters.from_dict(location_based_services_account_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


