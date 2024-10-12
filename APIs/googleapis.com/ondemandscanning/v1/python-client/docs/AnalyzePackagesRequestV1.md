# AnalyzePackagesRequestV1

AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_osv_data** | **bool** | [DEPRECATED] Whether to include OSV data in the scan. For backwards compatibility reasons, this field can be neither removed nor renamed. | [optional] 
**packages** | [**List[PackageData]**](PackageData.md) | The packages to analyze. | [optional] 
**resource_uri** | **str** | Required. The resource URI of the container image being scanned. | [optional] 

## Example

```python
from openapi_client.models.analyze_packages_request_v1 import AnalyzePackagesRequestV1

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzePackagesRequestV1 from a JSON string
analyze_packages_request_v1_instance = AnalyzePackagesRequestV1.from_json(json)
# print the JSON string representation of the object
print(AnalyzePackagesRequestV1.to_json())

# convert the object into a dict
analyze_packages_request_v1_dict = analyze_packages_request_v1_instance.to_dict()
# create an instance of AnalyzePackagesRequestV1 from a dict
analyze_packages_request_v1_from_dict = AnalyzePackagesRequestV1.from_dict(analyze_packages_request_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


