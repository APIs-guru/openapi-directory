# ComplianceResultList

List of compliance results response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[ComplianceResult]**](ComplianceResult.md) | List of compliance results | 

## Example

```python
from openapi_client.models.compliance_result_list import ComplianceResultList

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceResultList from a JSON string
compliance_result_list_instance = ComplianceResultList.from_json(json)
# print the JSON string representation of the object
print(ComplianceResultList.to_json())

# convert the object into a dict
compliance_result_list_dict = compliance_result_list_instance.to_dict()
# create an instance of ComplianceResultList from a dict
compliance_result_list_from_dict = ComplianceResultList.from_dict(compliance_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


