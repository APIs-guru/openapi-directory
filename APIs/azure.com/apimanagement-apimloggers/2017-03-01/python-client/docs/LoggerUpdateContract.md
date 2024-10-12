# LoggerUpdateContract

Logger update contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LoggerUpdateParameters**](LoggerUpdateParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.logger_update_contract import LoggerUpdateContract

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerUpdateContract from a JSON string
logger_update_contract_instance = LoggerUpdateContract.from_json(json)
# print the JSON string representation of the object
print(LoggerUpdateContract.to_json())

# convert the object into a dict
logger_update_contract_dict = logger_update_contract_instance.to_dict()
# create an instance of LoggerUpdateContract from a dict
logger_update_contract_from_dict = LoggerUpdateContract.from_dict(logger_update_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


