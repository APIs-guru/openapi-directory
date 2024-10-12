# Zone

Describes a DNS zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets or sets the ETag of the zone that is being updated, as received from a Get operation. | [optional] 
**properties** | [**ZoneProperties**](ZoneProperties.md) |  | [optional] 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.zone import Zone

# TODO update the JSON string below
json = "{}"
# create an instance of Zone from a JSON string
zone_instance = Zone.from_json(json)
# print the JSON string representation of the object
print(Zone.to_json())

# convert the object into a dict
zone_dict = zone_instance.to_dict()
# create an instance of Zone from a dict
zone_from_dict = Zone.from_dict(zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


