# FindingsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**issue_id** | **int** |  | [optional] 
**meta_links** | **List[str]** |  | [optional] 
**meta_risk** | [**FindingsInnerMetaRisk**](FindingsInnerMetaRisk.md) |  | [optional] 
**meta_tags** | **List[str]** |  | [optional] 
**meta_vuln_refs** | [**FindingsInnerMetaVulnRefs**](FindingsInnerMetaVulnRefs.md) |  | [optional] 
**raw** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**solution** | **str** |  | [optional] 
**target_addrs** | **List[str]** |  | [optional] 
**target_proto** | **List[str]** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.findings_inner import FindingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of FindingsInner from a JSON string
findings_inner_instance = FindingsInner.from_json(json)
# print the JSON string representation of the object
print(FindingsInner.to_json())

# convert the object into a dict
findings_inner_dict = findings_inner_instance.to_dict()
# create an instance of FindingsInner from a dict
findings_inner_from_dict = FindingsInner.from_dict(findings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


