# CancelreservationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reservation** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cancelreservation_request import CancelreservationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelreservationRequest from a JSON string
cancelreservation_request_instance = CancelreservationRequest.from_json(json)
# print the JSON string representation of the object
print(CancelreservationRequest.to_json())

# convert the object into a dict
cancelreservation_request_dict = cancelreservation_request_instance.to_dict()
# create an instance of CancelreservationRequest from a dict
cancelreservation_request_from_dict = CancelreservationRequest.from_dict(cancelreservation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


