# ErrorContext

A description of the context in which an error occurred. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_request** | [**HttpRequestContext**](HttpRequestContext.md) |  | [optional] 
**report_location** | [**SourceLocation**](SourceLocation.md) |  | [optional] 
**source_references** | [**List[SourceReference]**](SourceReference.md) | Source code that was used to build the executable which has caused the given error message. | [optional] 
**user** | **str** | The user who caused or was affected by the crash. This can be a user ID, an email address, or an arbitrary token that uniquely identifies the user. When sending an error report, leave this field empty if the user was not logged in. In this case the Error Reporting system will use other data, such as remote IP address, to distinguish affected users. See &#x60;affected_users_count&#x60; in &#x60;ErrorGroupStats&#x60;. | [optional] 

## Example

```python
from openapi_client.models.error_context import ErrorContext

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorContext from a JSON string
error_context_instance = ErrorContext.from_json(json)
# print the JSON string representation of the object
print(ErrorContext.to_json())

# convert the object into a dict
error_context_dict = error_context_instance.to_dict()
# create an instance of ErrorContext from a dict
error_context_from_dict = ErrorContext.from_dict(error_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


