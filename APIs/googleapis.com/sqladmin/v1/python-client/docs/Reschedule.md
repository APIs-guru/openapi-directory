# Reschedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reschedule_type** | **str** | Required. The type of the reschedule. | [optional] 
**schedule_time** | **str** | Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type&#x3D;SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example &#x60;2012-11-15T16:19:00.094Z&#x60;. | [optional] 

## Example

```python
from openapi_client.models.reschedule import Reschedule

# TODO update the JSON string below
json = "{}"
# create an instance of Reschedule from a JSON string
reschedule_instance = Reschedule.from_json(json)
# print the JSON string representation of the object
print(Reschedule.to_json())

# convert the object into a dict
reschedule_dict = reschedule_instance.to_dict()
# create an instance of Reschedule from a dict
reschedule_from_dict = Reschedule.from_dict(reschedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


