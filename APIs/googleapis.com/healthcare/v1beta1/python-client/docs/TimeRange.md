# TimeRange

Apply consents given by patients whose most recent consent changes are in the time range. Note that after identifying these patients, the server applies all Consent resources given by those patients, not just the Consent resources within the timestamp in the range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Optional. The latest consent change time, in format YYYY-MM-DDThh:mm:ss.sss+zz:zz If not specified, the system uses the time when ApplyConsents was called. | [optional] 
**start** | **str** | Optional. The earliest consent change time, in format YYYY-MM-DDThh:mm:ss.sss+zz:zz If not specified, the system uses the FHIR store creation time. | [optional] 

## Example

```python
from openapi_client.models.time_range import TimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of TimeRange from a JSON string
time_range_instance = TimeRange.from_json(json)
# print the JSON string representation of the object
print(TimeRange.to_json())

# convert the object into a dict
time_range_dict = time_range_instance.to_dict()
# create an instance of TimeRange from a dict
time_range_from_dict = TimeRange.from_dict(time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


