# TransportEngagespotGet

The TransportEngagespot resource is a collection of transports that carry dispatched alerts to the external EngageSpot service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**engagespot_api_key** | **str** | The API key for the EngageSpot service. Stored in encrypted format. | 
**engagespot_campaign_name** | **str** | The campaign name for the EngageSpot service. | 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_engagespot_get import TransportEngagespotGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportEngagespotGet from a JSON string
transport_engagespot_get_instance = TransportEngagespotGet.from_json(json)
# print the JSON string representation of the object
print(TransportEngagespotGet.to_json())

# convert the object into a dict
transport_engagespot_get_dict = transport_engagespot_get_instance.to_dict()
# create an instance of TransportEngagespotGet from a dict
transport_engagespot_get_from_dict = TransportEngagespotGet.from_dict(transport_engagespot_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


