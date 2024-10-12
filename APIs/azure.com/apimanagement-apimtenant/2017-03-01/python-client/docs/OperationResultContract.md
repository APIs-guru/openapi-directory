# OperationResultContract

Operation Result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_log** | [**List[OperationResultLogItemContract]**](OperationResultLogItemContract.md) | This property if only provided as part of the TenantConfiguration_Validate operation. It contains the log the entities which will be updated/created/deleted as part of the TenantConfiguration_Deploy operation. | [optional] [readonly] 
**error** | [**TenantAccessUpdateDefaultResponse**](TenantAccessUpdateDefaultResponse.md) |  | [optional] 
**id** | **str** | Operation result identifier. | [optional] 
**result_info** | **str** | Optional result info. | [optional] 
**started** | **datetime** | Start time of an async operation. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 
**status** | **str** | Status of an async operation. | [optional] 
**updated** | **datetime** | Last update time of an async operation. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | [optional] 

## Example

```python
from openapi_client.models.operation_result_contract import OperationResultContract

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResultContract from a JSON string
operation_result_contract_instance = OperationResultContract.from_json(json)
# print the JSON string representation of the object
print(OperationResultContract.to_json())

# convert the object into a dict
operation_result_contract_dict = operation_result_contract_instance.to_dict()
# create an instance of OperationResultContract from a dict
operation_result_contract_from_dict = OperationResultContract.from_dict(operation_result_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


