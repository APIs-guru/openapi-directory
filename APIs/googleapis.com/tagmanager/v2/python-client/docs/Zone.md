# Zone

Represents a Google Tag Manager Zone's contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**boundary** | [**ZoneBoundary**](ZoneBoundary.md) |  | [optional] 
**child_container** | [**List[ZoneChildContainer]**](ZoneChildContainer.md) | Containers that are children of this Zone. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified. | [optional] 
**name** | **str** | Zone display name. | [optional] 
**notes** | **str** | User notes on how to apply this zone in the container. | [optional] 
**path** | **str** | GTM Zone&#39;s API relative path. | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**type_restriction** | [**ZoneTypeRestriction**](ZoneTypeRestriction.md) |  | [optional] 
**workspace_id** | **str** | GTM Workspace ID. | [optional] 
**zone_id** | **str** | The Zone ID uniquely identifies the GTM Zone. | [optional] 

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


