# TransportEngagespotJsonldPut

The TransportEngagespot resource is a collection of transports that carry dispatched alerts to the external EngageSpot service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**engagespot_api_key** | **str** | The API key for the EngageSpot service. Stored in encrypted format. | 
**engagespot_campaign_name** | **str** | The campaign name for the EngageSpot service. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_engagespot_jsonld_put import TransportEngagespotJsonldPut

# TODO update the JSON string below
json = "{}"
# create an instance of TransportEngagespotJsonldPut from a JSON string
transport_engagespot_jsonld_put_instance = TransportEngagespotJsonldPut.from_json(json)
# print the JSON string representation of the object
print(TransportEngagespotJsonldPut.to_json())

# convert the object into a dict
transport_engagespot_jsonld_put_dict = transport_engagespot_jsonld_put_instance.to_dict()
# create an instance of TransportEngagespotJsonldPut from a dict
transport_engagespot_jsonld_put_from_dict = TransportEngagespotJsonldPut.from_dict(transport_engagespot_jsonld_put_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


