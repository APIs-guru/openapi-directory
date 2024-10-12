# ErrorValue

An error in a cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | A message with more information about the error (in the spreadsheet&#39;s locale). | [optional] 
**type** | **str** | The type of error. | [optional] 

## Example

```python
from openapi_client.models.error_value import ErrorValue

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorValue from a JSON string
error_value_instance = ErrorValue.from_json(json)
# print the JSON string representation of the object
print(ErrorValue.to_json())

# convert the object into a dict
error_value_dict = error_value_instance.to_dict()
# create an instance of ErrorValue from a dict
error_value_from_dict = ErrorValue.from_dict(error_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


