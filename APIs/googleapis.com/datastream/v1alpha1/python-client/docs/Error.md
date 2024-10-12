# Error

Represent a user-facing Error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **Dict[str, str]** | Additional information about the error. | [optional] 
**error_time** | **str** | The time when the error occurred. | [optional] 
**error_uuid** | **str** | A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API responses. | [optional] 
**message** | **str** | A message containing more information about the error that occurred. | [optional] 
**reason** | **str** | A title that explains the reason for the error. | [optional] 

## Example

```python
from openapi_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


