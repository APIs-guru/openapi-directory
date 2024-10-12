# PersonalizerError

The error object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | High level error code. | 
**details** | [**List[PersonalizerError]**](PersonalizerError.md) | An array of details about specific errors that led to this reported error. | [optional] 
**inner_error** | [**InternalError**](InternalError.md) |  | [optional] 
**message** | **str** | A message explaining the error reported by the service. | 
**target** | **str** | Error source element. | [optional] 

## Example

```python
from openapi_client.models.personalizer_error import PersonalizerError

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalizerError from a JSON string
personalizer_error_instance = PersonalizerError.from_json(json)
# print the JSON string representation of the object
print(PersonalizerError.to_json())

# convert the object into a dict
personalizer_error_dict = personalizer_error_instance.to_dict()
# create an instance of PersonalizerError from a dict
personalizer_error_from_dict = PersonalizerError.from_dict(personalizer_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


