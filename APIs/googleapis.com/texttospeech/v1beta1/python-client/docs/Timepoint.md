# Timepoint

This contains a mapping between a certain point in the input text and a corresponding time in the output audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mark_name** | **str** | Timepoint name as received from the client within &#x60;&#x60; tag. | [optional] 
**time_seconds** | **float** | Time offset in seconds from the start of the synthesized audio. | [optional] 

## Example

```python
from openapi_client.models.timepoint import Timepoint

# TODO update the JSON string below
json = "{}"
# create an instance of Timepoint from a JSON string
timepoint_instance = Timepoint.from_json(json)
# print the JSON string representation of the object
print(Timepoint.to_json())

# convert the object into a dict
timepoint_dict = timepoint_instance.to_dict()
# create an instance of Timepoint from a dict
timepoint_from_dict = Timepoint.from_dict(timepoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


