# Status

If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The status code. For this API, this value either: - 10, indicating a &#x60;SCRIPT_TIMEOUT&#x60; error, - 3, indicating an &#x60;INVALID_ARGUMENT&#x60; error, or - 1, indicating a &#x60;CANCELLED&#x60; execution.  | [optional] 
**details** | **List[Dict[str, object]]** | An array that contains a single ExecutionError object that provides information about the nature of the error. | [optional] 
**message** | **str** | A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client. | [optional] 

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


