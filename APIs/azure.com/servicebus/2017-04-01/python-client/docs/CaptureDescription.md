# CaptureDescription

Properties to configure capture description for eventhub

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**Destination**](Destination.md) |  | [optional] 
**enabled** | **bool** | A value that indicates whether capture description is enabled.  | [optional] 
**encoding** | **str** | Enumerates the possible values for the encoding format of capture description. | [optional] 
**interval_in_seconds** | **int** | The time window allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds | [optional] 
**size_limit_in_bytes** | **int** | The size window defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 and 524288000 bytes | [optional] 

## Example

```python
from openapi_client.models.capture_description import CaptureDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CaptureDescription from a JSON string
capture_description_instance = CaptureDescription.from_json(json)
# print the JSON string representation of the object
print(CaptureDescription.to_json())

# convert the object into a dict
capture_description_dict = capture_description_instance.to_dict()
# create an instance of CaptureDescription from a dict
capture_description_from_dict = CaptureDescription.from_dict(capture_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


