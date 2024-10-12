# ErrorDetails

Data Lake Store error details information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | the HTTP status code or error code associated with this error | [optional] [readonly] 
**message** | **str** | the error message localized based on Accept-Language | [optional] [readonly] 
**target** | **str** | the target of the particular error (for example, the name of the property in error). | [optional] [readonly] 

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


