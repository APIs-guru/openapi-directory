# CancelReport409Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cancel_report409_response import CancelReport409Response

# TODO update the JSON string below
json = "{}"
# create an instance of CancelReport409Response from a JSON string
cancel_report409_response_instance = CancelReport409Response.from_json(json)
# print the JSON string representation of the object
print(CancelReport409Response.to_json())

# convert the object into a dict
cancel_report409_response_dict = cancel_report409_response_instance.to_dict()
# create an instance of CancelReport409Response from a dict
cancel_report409_response_from_dict = CancelReport409Response.from_dict(cancel_report409_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


