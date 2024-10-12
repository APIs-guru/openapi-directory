# StopWorkstationRequest

Request message for StopWorkstation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. | [optional] 
**validate_only** | **bool** | Optional. If set, validate the request and preview the review, but do not actually apply it. | [optional] 

## Example

```python
from openapi_client.models.stop_workstation_request import StopWorkstationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StopWorkstationRequest from a JSON string
stop_workstation_request_instance = StopWorkstationRequest.from_json(json)
# print the JSON string representation of the object
print(StopWorkstationRequest.to_json())

# convert the object into a dict
stop_workstation_request_dict = stop_workstation_request_instance.to_dict()
# create an instance of StopWorkstationRequest from a dict
stop_workstation_request_from_dict = StopWorkstationRequest.from_dict(stop_workstation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


