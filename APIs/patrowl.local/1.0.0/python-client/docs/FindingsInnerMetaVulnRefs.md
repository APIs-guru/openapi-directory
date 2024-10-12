# FindingsInnerMetaVulnRefs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid** | **List[str]** |  | [optional] 
**cpe** | **List[str]** |  | [optional] 
**cve** | **List[str]** |  | [optional] 
**cwe** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.findings_inner_meta_vuln_refs import FindingsInnerMetaVulnRefs

# TODO update the JSON string below
json = "{}"
# create an instance of FindingsInnerMetaVulnRefs from a JSON string
findings_inner_meta_vuln_refs_instance = FindingsInnerMetaVulnRefs.from_json(json)
# print the JSON string representation of the object
print(FindingsInnerMetaVulnRefs.to_json())

# convert the object into a dict
findings_inner_meta_vuln_refs_dict = findings_inner_meta_vuln_refs_instance.to_dict()
# create an instance of FindingsInnerMetaVulnRefs from a dict
findings_inner_meta_vuln_refs_from_dict = FindingsInnerMetaVulnRefs.from_dict(findings_inner_meta_vuln_refs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


