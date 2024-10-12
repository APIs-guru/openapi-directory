# ImpactedServiceRegion

Azure region impacted by the service health event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impacted_region** | **str** | Impacted region name. | [optional] 
**impacted_subscriptions** | **List[str]** | List subscription impacted by the service health event. | [optional] 
**last_update_time** | **datetime** | It provides the Timestamp for when the last update for the service health event. | [optional] 
**status** | **str** | Current status of event in the region. | [optional] 
**updates** | [**List[Update]**](Update.md) | List of updates for given service health event. | [optional] 

## Example

```python
from openapi_client.models.impacted_service_region import ImpactedServiceRegion

# TODO update the JSON string below
json = "{}"
# create an instance of ImpactedServiceRegion from a JSON string
impacted_service_region_instance = ImpactedServiceRegion.from_json(json)
# print the JSON string representation of the object
print(ImpactedServiceRegion.to_json())

# convert the object into a dict
impacted_service_region_dict = impacted_service_region_instance.to_dict()
# create an instance of ImpactedServiceRegion from a dict
impacted_service_region_from_dict = ImpactedServiceRegion.from_dict(impacted_service_region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


