# ResourceSkuZoneDetails

Describes The zonal capabilities of a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[SKUCapability]**](SKUCapability.md) | A list of capabilities that are available for the SKU in the specified list of zones. | [optional] [readonly] 
**name** | **List[str]** | The set of zones that the SKU is available in with the specified capabilities. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_sku_zone_details import ResourceSkuZoneDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSkuZoneDetails from a JSON string
resource_sku_zone_details_instance = ResourceSkuZoneDetails.from_json(json)
# print the JSON string representation of the object
print(ResourceSkuZoneDetails.to_json())

# convert the object into a dict
resource_sku_zone_details_dict = resource_sku_zone_details_instance.to_dict()
# create an instance of ResourceSkuZoneDetails from a dict
resource_sku_zone_details_from_dict = ResourceSkuZoneDetails.from_dict(resource_sku_zone_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


