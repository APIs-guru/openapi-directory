# ComplianceVersion

Describes the CIS benchmark version that is applicable to a given OS and os version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benchmark_document** | **str** | The name of the document that defines this benchmark, e.g. \&quot;CIS Container-Optimized OS\&quot;. | [optional] 
**cpe_uri** | **str** | The CPE URI (https://cpe.mitre.org/specification/) this benchmark is applicable to. | [optional] 
**version** | **str** | The version of the benchmark. This is set to the version of the OS-specific CIS document the benchmark is defined in. | [optional] 

## Example

```python
from openapi_client.models.compliance_version import ComplianceVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceVersion from a JSON string
compliance_version_instance = ComplianceVersion.from_json(json)
# print the JSON string representation of the object
print(ComplianceVersion.to_json())

# convert the object into a dict
compliance_version_dict = compliance_version_instance.to_dict()
# create an instance of ComplianceVersion from a dict
compliance_version_from_dict = ComplianceVersion.from_dict(compliance_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


