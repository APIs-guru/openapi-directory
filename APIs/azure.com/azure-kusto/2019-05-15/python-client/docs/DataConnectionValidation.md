# DataConnectionValidation

Class representing an data connection validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_connection_name** | **str** | The name of the data connection. | [optional] 
**properties** | [**DataConnection**](DataConnection.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_connection_validation import DataConnectionValidation

# TODO update the JSON string below
json = "{}"
# create an instance of DataConnectionValidation from a JSON string
data_connection_validation_instance = DataConnectionValidation.from_json(json)
# print the JSON string representation of the object
print(DataConnectionValidation.to_json())

# convert the object into a dict
data_connection_validation_dict = data_connection_validation_instance.to_dict()
# create an instance of DataConnectionValidation from a dict
data_connection_validation_from_dict = DataConnectionValidation.from_dict(data_connection_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


