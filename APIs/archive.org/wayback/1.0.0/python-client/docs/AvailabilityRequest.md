# AvailabilityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closest** | **str** | The direction to find the closest snapshot to the requested timestamp | [optional] 
**tag** | **str** | A user-supplied tag, used for collation | [optional] 
**timestamp** | **str** | Timestamp requested in ISO 8601 format. The following formats are acceptable: - YYYY - YYYY-MM - YYYY-MM-DD - YYYY-MM-DDTHH:mm:SSz - YYYY-MM-DD:HH:mm+00:00  | [optional] 
**url** | **str** | The URL requested | 

## Example

```python
from openapi_client.models.availability_request import AvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityRequest from a JSON string
availability_request_instance = AvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(AvailabilityRequest.to_json())

# convert the object into a dict
availability_request_dict = availability_request_instance.to_dict()
# create an instance of AvailabilityRequest from a dict
availability_request_from_dict = AvailabilityRequest.from_dict(availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


