# ErrorLogEntry

An entry describing an error that has occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | **List[str]** | A list of messages that carry the error details. | [optional] 
**url** | **str** | Required. A URL that refers to the target (a data source, a data sink, or an object) with which the error is associated. | [optional] 

## Example

```python
from openapi_client.models.error_log_entry import ErrorLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorLogEntry from a JSON string
error_log_entry_instance = ErrorLogEntry.from_json(json)
# print the JSON string representation of the object
print(ErrorLogEntry.to_json())

# convert the object into a dict
error_log_entry_dict = error_log_entry_instance.to_dict()
# create an instance of ErrorLogEntry from a dict
error_log_entry_from_dict = ErrorLogEntry.from_dict(error_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


