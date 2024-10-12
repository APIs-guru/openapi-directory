# OutputsTest200ResponseError

Describes the error that occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code associated with the error that occurred. | [optional] [readonly] 
**message** | **str** | Describes the error in detail. | [optional] [readonly] 

## Example

```python
from openapi_client.models.outputs_test200_response_error import OutputsTest200ResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of OutputsTest200ResponseError from a JSON string
outputs_test200_response_error_instance = OutputsTest200ResponseError.from_json(json)
# print the JSON string representation of the object
print(OutputsTest200ResponseError.to_json())

# convert the object into a dict
outputs_test200_response_error_dict = outputs_test200_response_error_instance.to_dict()
# create an instance of OutputsTest200ResponseError from a dict
outputs_test200_response_error_from_dict = OutputsTest200ResponseError.from_dict(outputs_test200_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


