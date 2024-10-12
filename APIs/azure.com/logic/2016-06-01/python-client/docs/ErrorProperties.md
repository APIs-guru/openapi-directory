# ErrorProperties

Error properties indicate why the Logic service was not able to process the incoming request. The reason is provided in the error message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.error_properties import ErrorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorProperties from a JSON string
error_properties_instance = ErrorProperties.from_json(json)
# print the JSON string representation of the object
print(ErrorProperties.to_json())

# convert the object into a dict
error_properties_dict = error_properties_instance.to_dict()
# create an instance of ErrorProperties from a dict
error_properties_from_dict = ErrorProperties.from_dict(error_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


