# PackageIssue

A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_cpe_uri** | **str** | Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in. | [optional] 
**affected_package** | **str** | Required. The package this vulnerability was found in. | [optional] 
**affected_version** | [**Version**](Version.md) |  | [optional] 
**effective_severity** | **str** | Output only. The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available. | [optional] [readonly] 
**file_location** | [**List[GrafeasV1FileLocation]**](GrafeasV1FileLocation.md) | The location at which this package was found. | [optional] 
**fix_available** | **bool** | Output only. Whether a fix is available for this package. | [optional] 
**fixed_cpe_uri** | **str** | The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri. | [optional] 
**fixed_package** | **str** | The package this vulnerability was fixed in. It is possible for this to be different from the affected_package. | [optional] 
**fixed_version** | [**Version**](Version.md) |  | [optional] 
**package_type** | **str** | The type of package (e.g. OS, MAVEN, GO). | [optional] 

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


