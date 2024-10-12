# NetworkOperationResultModel

Network operation result properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | **List[str]** | List of operation result instances. | [optional] 
**provisioning_state** | **str** | Success or failure of operation. | [optional] 

## Example

```python
from openapi_client.models.network_operation_result_model import NetworkOperationResultModel

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkOperationResultModel from a JSON string
network_operation_result_model_instance = NetworkOperationResultModel.from_json(json)
# print the JSON string representation of the object
print(NetworkOperationResultModel.to_json())

# convert the object into a dict
network_operation_result_model_dict = network_operation_result_model_instance.to_dict()
# create an instance of NetworkOperationResultModel from a dict
network_operation_result_model_from_dict = NetworkOperationResultModel.from_dict(network_operation_result_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


