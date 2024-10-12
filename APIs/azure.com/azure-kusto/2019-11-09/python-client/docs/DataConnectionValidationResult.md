# DataConnectionValidationResult

The result returned from a data connection validation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | A message which indicates a problem in data connection validation. | [optional] 

## Example

```python
from openapi_client.models.data_connection_validation_result import DataConnectionValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataConnectionValidationResult from a JSON string
data_connection_validation_result_instance = DataConnectionValidationResult.from_json(json)
# print the JSON string representation of the object
print(DataConnectionValidationResult.to_json())

# convert the object into a dict
data_connection_validation_result_dict = data_connection_validation_result_instance.to_dict()
# create an instance of DataConnectionValidationResult from a dict
data_connection_validation_result_from_dict = DataConnectionValidationResult.from_dict(data_connection_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


