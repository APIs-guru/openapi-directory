# ErrorDefinition

Error description and code explaining why an operation failed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | Service specific error code which serves as the substatus for the HTTP error code. | 
**message** | **str** | Description of the error. | 

## Example

```python
from openapi_client.models.error_definition import ErrorDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDefinition from a JSON string
error_definition_instance = ErrorDefinition.from_json(json)
# print the JSON string representation of the object
print(ErrorDefinition.to_json())

# convert the object into a dict
error_definition_dict = error_definition_instance.to_dict()
# create an instance of ErrorDefinition from a dict
error_definition_from_dict = ErrorDefinition.from_dict(error_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


