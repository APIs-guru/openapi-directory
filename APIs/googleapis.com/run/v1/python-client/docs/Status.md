# Status

Status is a return value for calls that don't return other objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Suggested HTTP return code for this status, 0 if not set. | [optional] 
**details** | [**StatusDetails**](StatusDetails.md) |  | [optional] 
**message** | **str** | A human-readable description of the status of this operation. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
**reason** | **str** | A machine-readable description of why this operation is in the \&quot;Failure\&quot; status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. | [optional] 
**status** | **str** | Status of the operation. One of: \&quot;Success\&quot; or \&quot;Failure\&quot;. | [optional] 

## Example

```python
from openapi_client.models.status import Status

# TODO update the JSON string below
json = "{}"
# create an instance of Status from a JSON string
status_instance = Status.from_json(json)
# print the JSON string representation of the object
print(Status.to_json())

# convert the object into a dict
status_dict = status_instance.to_dict()
# create an instance of Status from a dict
status_from_dict = Status.from_dict(status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


