# AnalyzePackagesResponseV1

AnalyzePackagesResponse contains the information necessary to find results for the given scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scan** | **str** | The name of the scan resource created by this successful scan. | [optional] 

## Example

```python
from openapi_client.models.analyze_packages_response_v1 import AnalyzePackagesResponseV1

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzePackagesResponseV1 from a JSON string
analyze_packages_response_v1_instance = AnalyzePackagesResponseV1.from_json(json)
# print the JSON string representation of the object
print(AnalyzePackagesResponseV1.to_json())

# convert the object into a dict
analyze_packages_response_v1_dict = analyze_packages_response_v1_instance.to_dict()
# create an instance of AnalyzePackagesResponseV1 from a dict
analyze_packages_response_v1_from_dict = AnalyzePackagesResponseV1.from_dict(analyze_packages_response_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


