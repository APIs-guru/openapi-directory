# AutoRemediationPrs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backlog_prs_enabled** | **bool** | If true, allows automatic remediation of newly identified issues, or older issues where a fix has been identified | [optional] 
**fresh_prs_enabled** | **bool** | If true, allows automatic remediation of prioritized backlog issues | [optional] 
**use_patch_remediation** | **bool** | If true, allows using patched remediation | [optional] 

## Example

```python
from openapi_client.models.auto_remediation_prs import AutoRemediationPrs

# TODO update the JSON string below
json = "{}"
# create an instance of AutoRemediationPrs from a JSON string
auto_remediation_prs_instance = AutoRemediationPrs.from_json(json)
# print the JSON string representation of the object
print(AutoRemediationPrs.to_json())

# convert the object into a dict
auto_remediation_prs_dict = auto_remediation_prs_instance.to_dict()
# create an instance of AutoRemediationPrs from a dict
auto_remediation_prs_from_dict = AutoRemediationPrs.from_dict(auto_remediation_prs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


