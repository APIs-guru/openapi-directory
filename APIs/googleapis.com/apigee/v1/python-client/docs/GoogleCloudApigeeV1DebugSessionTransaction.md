# GoogleCloudApigeeV1DebugSessionTransaction

A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **bool** | Flag indicating whether a transaction is completed or not | [optional] 
**point** | [**List[GoogleCloudApigeeV1Point]**](GoogleCloudApigeeV1Point.md) | List of debug data collected by runtime plane at various defined points in the flow. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_debug_session_transaction import GoogleCloudApigeeV1DebugSessionTransaction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DebugSessionTransaction from a JSON string
google_cloud_apigee_v1_debug_session_transaction_instance = GoogleCloudApigeeV1DebugSessionTransaction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DebugSessionTransaction.to_json())

# convert the object into a dict
google_cloud_apigee_v1_debug_session_transaction_dict = google_cloud_apigee_v1_debug_session_transaction_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DebugSessionTransaction from a dict
google_cloud_apigee_v1_debug_session_transaction_from_dict = GoogleCloudApigeeV1DebugSessionTransaction.from_dict(google_cloud_apigee_v1_debug_session_transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


