# FindingsInnerMetaRisk


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvss_base_score** | **List[str]** |  | [optional] 
**cvss_vector** | **List[str]** |  | [optional] 
**exploit_available** | **List[str]** |  | [optional] 
**exploitability_ease** | **List[str]** |  | [optional] 
**patch_publication_date** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.findings_inner_meta_risk import FindingsInnerMetaRisk

# TODO update the JSON string below
json = "{}"
# create an instance of FindingsInnerMetaRisk from a JSON string
findings_inner_meta_risk_instance = FindingsInnerMetaRisk.from_json(json)
# print the JSON string representation of the object
print(FindingsInnerMetaRisk.to_json())

# convert the object into a dict
findings_inner_meta_risk_dict = findings_inner_meta_risk_instance.to_dict()
# create an instance of FindingsInnerMetaRisk from a dict
findings_inner_meta_risk_from_dict = FindingsInnerMetaRisk.from_dict(findings_inner_meta_risk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


