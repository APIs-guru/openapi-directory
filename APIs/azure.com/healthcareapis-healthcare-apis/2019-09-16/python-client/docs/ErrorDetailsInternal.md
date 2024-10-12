# ErrorDetailsInternal

Error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] [readonly] 
**target** | **str** | The target of the particular error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.error_details_internal import ErrorDetailsInternal

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDetailsInternal from a JSON string
error_details_internal_instance = ErrorDetailsInternal.from_json(json)
# print the JSON string representation of the object
print(ErrorDetailsInternal.to_json())

# convert the object into a dict
error_details_internal_dict = error_details_internal_instance.to_dict()
# create an instance of ErrorDetailsInternal from a dict
error_details_internal_from_dict = ErrorDetailsInternal.from_dict(error_details_internal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


