# CancellationRequestPartial

Service Cancellation Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decommission_at** | **date** | An optional date for scheduling the cancellation and service decommissioning. | [optional] 

## Example

```python
from openapi_client.models.cancellation_request_partial import CancellationRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of CancellationRequestPartial from a JSON string
cancellation_request_partial_instance = CancellationRequestPartial.from_json(json)
# print the JSON string representation of the object
print(CancellationRequestPartial.to_json())

# convert the object into a dict
cancellation_request_partial_dict = cancellation_request_partial_instance.to_dict()
# create an instance of CancellationRequestPartial from a dict
cancellation_request_partial_from_dict = CancellationRequestPartial.from_dict(cancellation_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


