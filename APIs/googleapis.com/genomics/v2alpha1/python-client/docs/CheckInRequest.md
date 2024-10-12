# CheckInRequest

The parameters to the CheckIn method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deadline_expired** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } | [optional] 
**event** | **Dict[str, object]** | A workflow specific event occurred. | [optional] 
**events** | [**List[TimestampedEvent]**](TimestampedEvent.md) | A list of timestamped events. | [optional] 
**result** | [**Status**](Status.md) |  | [optional] 
**sos_report** | **bytearray** | An SOS report for an unexpected VM failure. | [optional] 
**worker_status** | [**WorkerStatus**](WorkerStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.check_in_request import CheckInRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckInRequest from a JSON string
check_in_request_instance = CheckInRequest.from_json(json)
# print the JSON string representation of the object
print(CheckInRequest.to_json())

# convert the object into a dict
check_in_request_dict = check_in_request_instance.to_dict()
# create an instance of CheckInRequest from a dict
check_in_request_from_dict = CheckInRequest.from_dict(check_in_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


