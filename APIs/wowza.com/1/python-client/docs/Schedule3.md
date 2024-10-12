# Schedule3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | The type of action that the schedule should trigger on the transcoder. The default is &lt;strong&gt;start&lt;/strong&gt;. | 
**end_repeat** | **date** | The month, day, and year that a recurring schedule should stop running. Specify &lt;strong&gt;YYYY-MM-DD&lt;/strong&gt;. | [optional] 
**name** | **str** | A descriptive name for the schedule. Maximum 255 characters. | 
**recurrence_data** | **str** | The day or days of the week that a recurring schedule should run. | [optional] 
**recurrence_type** | **str** | A schedule can run one time only (&lt;strong&gt;once&lt;/strong&gt;) or repeat (&lt;strong&gt;recur&lt;/strong&gt;) until a specified &lt;em&gt;end_repeat&lt;/em&gt; date. The default is &lt;strong&gt;once&lt;/strong&gt;. | 
**start_repeat** | **date** | The month, day, and year that the recurring schedule should go into effect. Specify &lt;strong&gt;YYYY-MM-DD&lt;/strong&gt;. | [optional] 
**start_transcoder** | **datetime** | The month, day, year, and time of day that the &lt;em&gt;action_type&lt;/em&gt; &lt;strong&gt;start&lt;/strong&gt; should occur. Specify &lt;strong&gt;YYYY-MM-DD HH:MM:SS&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 
**stop_transcoder** | **datetime** | The month, day, year, and time of day that the &lt;em&gt;action_type&lt;/em&gt; &lt;strong&gt;stop&lt;/strong&gt; should occur. Specify &lt;strong&gt;YYYY-MM-DD HH:MM:SS&lt;/strong&gt; where &lt;strong&gt;HH&lt;/strong&gt; is a 24-hour clock in UTC. | [optional] 
**transcoder_id** | **str** | The unique alphanumeric string that identifies the transcoder being scheduled. | 

## Example

```python
from openapi_client.models.schedule3 import Schedule3

# TODO update the JSON string below
json = "{}"
# create an instance of Schedule3 from a JSON string
schedule3_instance = Schedule3.from_json(json)
# print the JSON string representation of the object
print(Schedule3.to_json())

# convert the object into a dict
schedule3_dict = schedule3_instance.to_dict()
# create an instance of Schedule3 from a dict
schedule3_from_dict = Schedule3.from_dict(schedule3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


