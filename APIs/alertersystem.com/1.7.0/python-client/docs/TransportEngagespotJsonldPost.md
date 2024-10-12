# TransportEngagespotJsonldPost

The TransportEngagespot resource is a collection of transports that carry dispatched alerts to the external EngageSpot service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**engagespot_api_key** | **str** | The API key for the EngageSpot service. Stored in encrypted format. | 
**engagespot_campaign_name** | **str** | The campaign name for the EngageSpot service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_engagespot_jsonld_post import TransportEngagespotJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportEngagespotJsonldPost from a JSON string
transport_engagespot_jsonld_post_instance = TransportEngagespotJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportEngagespotJsonldPost.to_json())

# convert the object into a dict
transport_engagespot_jsonld_post_dict = transport_engagespot_jsonld_post_instance.to_dict()
# create an instance of TransportEngagespotJsonldPost from a dict
transport_engagespot_jsonld_post_from_dict = TransportEngagespotJsonldPost.from_dict(transport_engagespot_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


