# ResourceSku

A resource SKU

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[ResourceSkuCapabilities]**](ResourceSkuCapabilities.md) | A list of capabilities of this SKU, such as throughput or ops/sec | [optional] 
**location_info** | [**List[ResourceSkuLocationInfo]**](ResourceSkuLocationInfo.md) | The set of locations that the SKU is available. | [optional] 
**locations** | **List[str]** | The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). | [optional] [readonly] 
**name** | **str** | The name of this sku. | [optional] 
**resource_type** | **str** | The type of resource the sku applies to. | [optional] [readonly] 
**restrictions** | [**List[Restriction]**](Restriction.md) | The restrictions because of which SKU cannot be used. This is empty if there are no restrictions. | [optional] 

## Example

```python
from openapi_client.models.resource_sku import ResourceSku

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSku from a JSON string
resource_sku_instance = ResourceSku.from_json(json)
# print the JSON string representation of the object
print(ResourceSku.to_json())

# convert the object into a dict
resource_sku_dict = resource_sku_instance.to_dict()
# create an instance of ResourceSku from a dict
resource_sku_from_dict = ResourceSku.from_dict(resource_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


