# FloodlightActivity

A single Floodlight activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_ids** | **List[str]** | Output only. IDs of the advertisers that have access to the parent Floodlight group. Only advertisers under the provided partner ID will be listed in this field. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the Floodlight activity. | [optional] 
**floodlight_activity_id** | **str** | Output only. The unique ID of the Floodlight activity. Assigned by the system. | [optional] [readonly] 
**floodlight_group_id** | **str** | Required. Immutable. The ID of the parent Floodlight group. | [optional] 
**name** | **str** | Output only. The resource name of the Floodlight activity. | [optional] [readonly] 
**remarketing_configs** | [**List[RemarketingConfig]**](RemarketingConfig.md) | Output only. A list of configuration objects designating whether remarketing for this Floodlight Activity is enabled and available for a specifc advertiser. If enabled, this Floodlight Activity generates a remarketing user list that is able to be used in targeting under the advertiser. | [optional] [readonly] 
**serving_status** | **str** | Optional. Whether the Floodlight activity is served. | [optional] 
**ssl_required** | **bool** | Output only. Whether tags are required to be compliant. | [optional] [readonly] 

## Example

```python
from openapi_client.models.floodlight_activity import FloodlightActivity

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivity from a JSON string
floodlight_activity_instance = FloodlightActivity.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivity.to_json())

# convert the object into a dict
floodlight_activity_dict = floodlight_activity_instance.to_dict()
# create an instance of FloodlightActivity from a dict
floodlight_activity_from_dict = FloodlightActivity.from_dict(floodlight_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


