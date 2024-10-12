# DepositMethodProcessorData

Processor`s Data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DepositMethodProcessorDataDataInner]**](DepositMethodProcessorDataDataInner.md) |  | [optional] 
**links** | [**DepositMethodProcessorDataLinks**](DepositMethodProcessorDataLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.deposit_method_processor_data import DepositMethodProcessorData

# TODO update the JSON string below
json = "{}"
# create an instance of DepositMethodProcessorData from a JSON string
deposit_method_processor_data_instance = DepositMethodProcessorData.from_json(json)
# print the JSON string representation of the object
print(DepositMethodProcessorData.to_json())

# convert the object into a dict
deposit_method_processor_data_dict = deposit_method_processor_data_instance.to_dict()
# create an instance of DepositMethodProcessorData from a dict
deposit_method_processor_data_from_dict = DepositMethodProcessorData.from_dict(deposit_method_processor_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


