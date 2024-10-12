# Appliance

Information about appliance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of the appliance. Allowed values are MarketPlace and ServiceCatalog. | [optional] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**properties** | [**ApplianceProperties**](ApplianceProperties.md) |  | [optional] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**managed_by** | **str** | ID of the resource that manages this resource. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.appliance import Appliance

# TODO update the JSON string below
json = "{}"
# create an instance of Appliance from a JSON string
appliance_instance = Appliance.from_json(json)
# print the JSON string representation of the object
print(Appliance.to_json())

# convert the object into a dict
appliance_dict = appliance_instance.to_dict()
# create an instance of Appliance from a dict
appliance_from_dict = Appliance.from_dict(appliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


