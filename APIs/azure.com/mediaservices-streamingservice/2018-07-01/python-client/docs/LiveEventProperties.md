# LiveEventProperties

The Live Event properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The exact time the Live Event was created. | [optional] [readonly] 
**cross_site_access_policies** | [**CrossSiteAccessPolicies**](CrossSiteAccessPolicies.md) |  | [optional] 
**description** | **str** | The Live Event description. | [optional] 
**encoding** | [**LiveEventEncoding**](LiveEventEncoding.md) |  | [optional] 
**input** | [**LiveEventInput**](LiveEventInput.md) |  | 
**last_modified** | **datetime** | The exact time the Live Event was last modified. | [optional] [readonly] 
**preview** | [**LiveEventPreview**](LiveEventPreview.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of the Live Event. | [optional] [readonly] 
**resource_state** | **str** | The resource state of the Live Event. | [optional] [readonly] 
**stream_options** | **List[str]** | The options to use for the LiveEvent.  This value is specified at creation time and cannot be updated. | [optional] 
**vanity_url** | **bool** | Specifies whether to use a vanity url with the Live Event.  This value is specified at creation time and cannot be updated. | [optional] 

## Example

```python
from openapi_client.models.live_event_properties import LiveEventProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LiveEventProperties from a JSON string
live_event_properties_instance = LiveEventProperties.from_json(json)
# print the JSON string representation of the object
print(LiveEventProperties.to_json())

# convert the object into a dict
live_event_properties_dict = live_event_properties_instance.to_dict()
# create an instance of LiveEventProperties from a dict
live_event_properties_from_dict = LiveEventProperties.from_dict(live_event_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


