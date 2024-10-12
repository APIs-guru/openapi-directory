# AnalyzePackagesResponse

AnalyzePackagesResponse contains the information necessary to find results for the given scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scan** | **str** | The name of the scan resource created by this successful scan. | [optional] 

## Example

```python
from openapi_client.models.analyze_packages_response import AnalyzePackagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzePackagesResponse from a JSON string
analyze_packages_response_instance = AnalyzePackagesResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzePackagesResponse.to_json())

# convert the object into a dict
analyze_packages_response_dict = analyze_packages_response_instance.to_dict()
# create an instance of AnalyzePackagesResponse from a dict
analyze_packages_response_from_dict = AnalyzePackagesResponse.from_dict(analyze_packages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


