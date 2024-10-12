# MapsAccount

An Azure resource which represents access to a suite of Maps REST APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location of the resource. | [optional] [readonly] 
**properties** | [**MapsAccountProperties**](MapsAccountProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. | [optional] [readonly] 
**id** | **str** | The fully qualified Maps Account resource identifier. | [optional] [readonly] 
**name** | **str** | The name of the Maps Account, which is unique within a Resource Group. | [optional] [readonly] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.maps_account import MapsAccount

# TODO update the JSON string below
json = "{}"
# create an instance of MapsAccount from a JSON string
maps_account_instance = MapsAccount.from_json(json)
# print the JSON string representation of the object
print(MapsAccount.to_json())

# convert the object into a dict
maps_account_dict = maps_account_instance.to_dict()
# create an instance of MapsAccount from a dict
maps_account_from_dict = MapsAccount.from_dict(maps_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


