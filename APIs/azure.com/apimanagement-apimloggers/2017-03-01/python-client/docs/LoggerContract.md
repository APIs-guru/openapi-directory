# LoggerContract

Logger details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LoggerContractProperties**](LoggerContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.logger_contract import LoggerContract

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerContract from a JSON string
logger_contract_instance = LoggerContract.from_json(json)
# print the JSON string representation of the object
print(LoggerContract.to_json())

# convert the object into a dict
logger_contract_dict = logger_contract_instance.to_dict()
# create an instance of LoggerContract from a dict
logger_contract_from_dict = LoggerContract.from_dict(logger_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


