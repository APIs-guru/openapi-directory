# TimeOffRequestNotes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employee** | **str** |  | [optional] 
**manager** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.time_off_request_notes import TimeOffRequestNotes

# TODO update the JSON string below
json = "{}"
# create an instance of TimeOffRequestNotes from a JSON string
time_off_request_notes_instance = TimeOffRequestNotes.from_json(json)
# print the JSON string representation of the object
print(TimeOffRequestNotes.to_json())

# convert the object into a dict
time_off_request_notes_dict = time_off_request_notes_instance.to_dict()
# create an instance of TimeOffRequestNotes from a dict
time_off_request_notes_from_dict = TimeOffRequestNotes.from_dict(time_off_request_notes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


