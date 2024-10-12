# LocationBasedServicesAccount

An Azure resource which represents access to a suite of Location Based Services REST APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the resource. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. | [optional] [readonly] 
**id** | **str** | The fully qualified Location Based Services Account resource identifier. | [optional] [readonly] 
**name** | **str** | The name of the Location Based Services Account, which is unique within a Resource Group. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location_based_services_account import LocationBasedServicesAccount

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesAccount from a JSON string
location_based_services_account_instance = LocationBasedServicesAccount.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesAccount.to_json())

# convert the object into a dict
location_based_services_account_dict = location_based_services_account_instance.to_dict()
# create an instance of LocationBasedServicesAccount from a dict
location_based_services_account_from_dict = LocationBasedServicesAccount.from_dict(location_based_services_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


