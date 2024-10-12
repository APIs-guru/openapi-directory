# ManualTrigger

A single manual trigger in Display & Video 360. **Warning:** Line Items using manual triggers no longer serve in Display & Video 360. This resource will sunset on August 1, 2023. Read our [feature deprecation announcement](/display-video/api/deprecations#features.manual_triggers) for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_duration_minutes** | **str** | Required. The maximum duration of each activation in minutes. Must be between 1 and 360 inclusive. After this duration, the trigger will be automatically deactivated. | [optional] 
**advertiser_id** | **str** | Required. Immutable. The unique ID of the advertiser that the manual trigger belongs to. | [optional] 
**display_name** | **str** | Required. The display name of the manual trigger. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**latest_activation_time** | **str** | Output only. The timestamp of the trigger&#39;s latest activation. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the manual trigger. | [optional] [readonly] 
**state** | **str** | Output only. The state of the manual trigger. Will be set to the &#x60;INACTIVE&#x60; state upon creation. | [optional] [readonly] 
**trigger_id** | **str** | Output only. The unique ID of the manual trigger. | [optional] [readonly] 

## Example

```python
from openapi_client.models.manual_trigger import ManualTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of ManualTrigger from a JSON string
manual_trigger_instance = ManualTrigger.from_json(json)
# print the JSON string representation of the object
print(ManualTrigger.to_json())

# convert the object into a dict
manual_trigger_dict = manual_trigger_instance.to_dict()
# create an instance of ManualTrigger from a dict
manual_trigger_from_dict = ManualTrigger.from_dict(manual_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


