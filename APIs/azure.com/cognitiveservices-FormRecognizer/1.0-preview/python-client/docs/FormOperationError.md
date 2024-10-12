# FormOperationError

Error reported during an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Message reported during the train operation. | [optional] 

## Example

```python
from openapi_client.models.form_operation_error import FormOperationError

# TODO update the JSON string below
json = "{}"
# create an instance of FormOperationError from a JSON string
form_operation_error_instance = FormOperationError.from_json(json)
# print the JSON string representation of the object
print(FormOperationError.to_json())

# convert the object into a dict
form_operation_error_dict = form_operation_error_instance.to_dict()
# create an instance of FormOperationError from a dict
form_operation_error_from_dict = FormOperationError.from_dict(form_operation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


