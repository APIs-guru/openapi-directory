# ComplianceDetail

The compliance state rollup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_state** | **str** | The compliance state. | [optional] 
**count** | **int** | Summarized count value for this compliance state. | [optional] 

## Example

```python
from openapi_client.models.compliance_detail import ComplianceDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceDetail from a JSON string
compliance_detail_instance = ComplianceDetail.from_json(json)
# print the JSON string representation of the object
print(ComplianceDetail.to_json())

# convert the object into a dict
compliance_detail_dict = compliance_detail_instance.to_dict()
# create an instance of ComplianceDetail from a dict
compliance_detail_from_dict = ComplianceDetail.from_dict(compliance_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


