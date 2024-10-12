# MapsAccount

An Azure resource which represents access to a suite of Maps REST APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MapsAccountProperties**](MapsAccountProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

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


