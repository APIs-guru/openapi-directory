# CaptureOrderResponse

Response message for the CaptureOrder method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Only defined if the request was successful. Acceptable values are: * \&quot;duplicate\&quot; * \&quot;executed\&quot; | [optional] 

## Example

```python
from openapi_client.models.capture_order_response import CaptureOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CaptureOrderResponse from a JSON string
capture_order_response_instance = CaptureOrderResponse.from_json(json)
# print the JSON string representation of the object
print(CaptureOrderResponse.to_json())

# convert the object into a dict
capture_order_response_dict = capture_order_response_instance.to_dict()
# create an instance of CaptureOrderResponse from a dict
capture_order_response_from_dict = CaptureOrderResponse.from_dict(capture_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


