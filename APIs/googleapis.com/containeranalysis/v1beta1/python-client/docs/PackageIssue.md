# PackageIssue

This message wraps a location affected by a vulnerability and its associated fix (if one is available).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_location** | [**VulnerabilityLocation**](VulnerabilityLocation.md) |  | [optional] 
**effective_severity** | **str** | Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. | [optional] [readonly] 
**fixed_location** | [**VulnerabilityLocation**](VulnerabilityLocation.md) |  | [optional] 
**package_type** | **str** | The type of package (e.g. OS, MAVEN, GO). | [optional] 
**severity_name** | **str** | Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability. | [optional] 

## Example

```python
from openapi_client.models.package_issue import PackageIssue

# TODO update the JSON string below
json = "{}"
# create an instance of PackageIssue from a JSON string
package_issue_instance = PackageIssue.from_json(json)
# print the JSON string representation of the object
print(PackageIssue.to_json())

# convert the object into a dict
package_issue_dict = package_issue_instance.to_dict()
# create an instance of PackageIssue from a dict
package_issue_from_dict = PackageIssue.from_dict(package_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


