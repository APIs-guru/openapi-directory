# AnalyzePackagesMetadataV1

AnalyzePackagesMetadata contains metadata for an active scan of a container image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | When the scan was created. | [optional] 
**resource_uri** | **str** | The resource URI of the container image being scanned. | [optional] 

## Example

```python
from openapi_client.models.analyze_packages_metadata_v1 import AnalyzePackagesMetadataV1

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzePackagesMetadataV1 from a JSON string
analyze_packages_metadata_v1_instance = AnalyzePackagesMetadataV1.from_json(json)
# print the JSON string representation of the object
print(AnalyzePackagesMetadataV1.to_json())

# convert the object into a dict
analyze_packages_metadata_v1_dict = analyze_packages_metadata_v1_instance.to_dict()
# create an instance of AnalyzePackagesMetadataV1 from a dict
analyze_packages_metadata_v1_from_dict = AnalyzePackagesMetadataV1.from_dict(analyze_packages_metadata_v1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


