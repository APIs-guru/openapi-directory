# PrivateZone

Describes a Private DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | The ETag of the zone. | [optional] 
**properties** | [**PrivateZoneProperties**](PrivateZoneProperties.md) |  | [optional] 
**location** | **str** | The Azure Region where the resource lives | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Example - &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateDnsZones/{privateDnsZoneName}&#39;. | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Example - &#39;Microsoft.Network/privateDnsZones&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_zone import PrivateZone

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateZone from a JSON string
private_zone_instance = PrivateZone.from_json(json)
# print the JSON string representation of the object
print(PrivateZone.to_json())

# convert the object into a dict
private_zone_dict = private_zone_instance.to_dict()
# create an instance of PrivateZone from a dict
private_zone_from_dict = PrivateZone.from_dict(private_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


