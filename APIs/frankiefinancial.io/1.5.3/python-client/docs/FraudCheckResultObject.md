# FraudCheckResultObject

Collection of fraud check results for the entity.      Contains fraud list and/or background result arrays. Other fraud check types will appear over time 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fraud_background_check_results** | [**List[ProcessResultObject]**](ProcessResultObject.md) |  | [optional] 
**fraud_list_results** | [**List[ProcessResultObject]**](ProcessResultObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.fraud_check_result_object import FraudCheckResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of FraudCheckResultObject from a JSON string
fraud_check_result_object_instance = FraudCheckResultObject.from_json(json)
# print the JSON string representation of the object
print(FraudCheckResultObject.to_json())

# convert the object into a dict
fraud_check_result_object_dict = fraud_check_result_object_instance.to_dict()
# create an instance of FraudCheckResultObject from a dict
fraud_check_result_object_from_dict = FraudCheckResultObject.from_dict(fraud_check_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


