# AnalyzePackagesMetadata

AnalyzePackagesMetadata contains metadata for an active scan of a container image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | When the scan was created. | [optional] 
**resource_uri** | **str** | The resource URI of the container image being scanned. | [optional] 

## Example

```python
from openapi_client.models.analyze_packages_metadata import AnalyzePackagesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzePackagesMetadata from a JSON string
analyze_packages_metadata_instance = AnalyzePackagesMetadata.from_json(json)
# print the JSON string representation of the object
print(AnalyzePackagesMetadata.to_json())

# convert the object into a dict
analyze_packages_metadata_dict = analyze_packages_metadata_instance.to_dict()
# create an instance of AnalyzePackagesMetadata from a dict
analyze_packages_metadata_from_dict = AnalyzePackagesMetadata.from_dict(analyze_packages_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


