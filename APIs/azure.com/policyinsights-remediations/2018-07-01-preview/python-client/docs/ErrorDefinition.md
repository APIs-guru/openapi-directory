# ErrorDefinition

Error definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_info** | [**List[TypedErrorInfo]**](TypedErrorInfo.md) | Additional scenario specific error details. | [optional] [readonly] 
**code** | **str** | Service specific error code which serves as the substatus for the HTTP error code. | [optional] [readonly] 
**details** | [**List[ErrorDefinition]**](ErrorDefinition.md) | Internal error details. | [optional] [readonly] 
**message** | **str** | Description of the error. | [optional] [readonly] 
**target** | **str** | The target of the error. | [optional] [readonly] 

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


