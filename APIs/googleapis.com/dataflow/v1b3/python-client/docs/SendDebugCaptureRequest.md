# SendDebugCaptureRequest

Request to send encoded debug information. Next ID: 8

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_id** | **str** | The internal component id for which debug information is sent. | [optional] 
**data** | **str** | The encoded debug information. | [optional] 
**data_format** | **str** | Format for the data field above (id&#x3D;5). | [optional] 
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. | [optional] 
**worker_id** | **str** | The worker id, i.e., VM hostname. | [optional] 

## Example

```python
from openapi_client.models.send_debug_capture_request import SendDebugCaptureRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendDebugCaptureRequest from a JSON string
send_debug_capture_request_instance = SendDebugCaptureRequest.from_json(json)
# print the JSON string representation of the object
print(SendDebugCaptureRequest.to_json())

# convert the object into a dict
send_debug_capture_request_dict = send_debug_capture_request_instance.to_dict()
# create an instance of SendDebugCaptureRequest from a dict
send_debug_capture_request_from_dict = SendDebugCaptureRequest.from_dict(send_debug_capture_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


