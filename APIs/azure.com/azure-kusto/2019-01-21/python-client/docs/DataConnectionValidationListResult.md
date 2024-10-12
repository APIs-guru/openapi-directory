# DataConnectionValidationListResult

The list Kusto data connection validation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DataConnectionValidationResult]**](DataConnectionValidationResult.md) | The list of Kusto data connection validation errors. | [optional] 

## Example

```python
from openapi_client.models.data_connection_validation_list_result import DataConnectionValidationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataConnectionValidationListResult from a JSON string
data_connection_validation_list_result_instance = DataConnectionValidationListResult.from_json(json)
# print the JSON string representation of the object
print(DataConnectionValidationListResult.to_json())

# convert the object into a dict
data_connection_validation_list_result_dict = data_connection_validation_list_result_instance.to_dict()
# create an instance of DataConnectionValidationListResult from a dict
data_connection_validation_list_result_from_dict = DataConnectionValidationListResult.from_dict(data_connection_validation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


