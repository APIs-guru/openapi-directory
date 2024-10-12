# ErrorDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | A plain text description of the error that occurred, and possible solutions if available.   | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience  | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS  | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called  | [optional] 

## Example

```python
from openapi_client.models.error_details import ErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDetails from a JSON string
error_details_instance = ErrorDetails.from_json(json)
# print the JSON string representation of the object
print(ErrorDetails.to_json())

# convert the object into a dict
error_details_dict = error_details_instance.to_dict()
# create an instance of ErrorDetails from a dict
error_details_from_dict = ErrorDetails.from_dict(error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


