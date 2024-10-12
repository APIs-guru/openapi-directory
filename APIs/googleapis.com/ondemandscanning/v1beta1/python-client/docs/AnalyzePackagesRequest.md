# AnalyzePackagesRequest

AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packages** | [**List[PackageData]**](PackageData.md) | The packages to analyze. | [optional] 
**resource_uri** | **str** | Required. The resource URI of the container image being scanned. | [optional] 

## Example

```python
from openapi_client.models.analyze_packages_request import AnalyzePackagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzePackagesRequest from a JSON string
analyze_packages_request_instance = AnalyzePackagesRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzePackagesRequest.to_json())

# convert the object into a dict
analyze_packages_request_dict = analyze_packages_request_instance.to_dict()
# create an instance of AnalyzePackagesRequest from a dict
analyze_packages_request_from_dict = AnalyzePackagesRequest.from_dict(analyze_packages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


