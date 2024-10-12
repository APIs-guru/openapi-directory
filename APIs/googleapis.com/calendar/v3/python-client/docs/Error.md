# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Domain, or broad category, of the error. | [optional] 
**reason** | **str** | Specific reason for the error. Some of the possible values are:   - \&quot;groupTooBig\&quot; - The group of users requested is too large for a single query.  - \&quot;tooManyCalendarsRequested\&quot; - The number of calendars requested is too large for a single query.  - \&quot;notFound\&quot; - The requested resource was not found.  - \&quot;internalError\&quot; - The API service has encountered an internal error.  Additional error types may be added in the future, so clients should gracefully handle additional error statuses not included in this list. | [optional] 

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


