# ComplianceResult

a compliance result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ComplianceResultProperties**](ComplianceResultProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.compliance_result import ComplianceResult

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceResult from a JSON string
compliance_result_instance = ComplianceResult.from_json(json)
# print the JSON string representation of the object
print(ComplianceResult.to_json())

# convert the object into a dict
compliance_result_dict = compliance_result_instance.to_dict()
# create an instance of ComplianceResult from a dict
compliance_result_from_dict = ComplianceResult.from_dict(compliance_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


