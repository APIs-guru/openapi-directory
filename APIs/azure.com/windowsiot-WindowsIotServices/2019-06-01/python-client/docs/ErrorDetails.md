# ErrorDetails

The details of the error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | One of a server-defined set of error codes. | [optional] 
**details** | **str** | A human-readable representation of the error&#39;s details. | [optional] 
**message** | **str** | A human-readable representation of the error. | [optional] 
**target** | **str** | The target of the particular error. | [optional] 

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


