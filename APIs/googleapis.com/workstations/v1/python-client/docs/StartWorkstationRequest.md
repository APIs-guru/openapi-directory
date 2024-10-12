# StartWorkstationRequest

Request message for StartWorkstation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. | [optional] 
**validate_only** | **bool** | Optional. If set, validate the request and preview the review, but do not actually apply it. | [optional] 

## Example

```python
from openapi_client.models.start_workstation_request import StartWorkstationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartWorkstationRequest from a JSON string
start_workstation_request_instance = StartWorkstationRequest.from_json(json)
# print the JSON string representation of the object
print(StartWorkstationRequest.to_json())

# convert the object into a dict
start_workstation_request_dict = start_workstation_request_instance.to_dict()
# create an instance of StartWorkstationRequest from a dict
start_workstation_request_from_dict = StartWorkstationRequest.from_dict(start_workstation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


