# Annotations

Additional information provided through arbitrary metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_opencontainers_image_authors** | **str** | Contact details of the people or organization responsible for the image. | [optional] 
**org_opencontainers_image_created** | **datetime** | Date and time on which the image was built (string, date-time as defined by https://tools.ietf.org/html/rfc3339#section-5.6) | [optional] 
**org_opencontainers_image_description** | **str** | Human-readable description of the software packaged in the image | [optional] 
**org_opencontainers_image_documentation** | **str** | URL to get documentation on the image. | [optional] 
**org_opencontainers_image_licenses** | **str** | License(s) under which contained software is distributed as an SPDX License Expression. | [optional] 
**org_opencontainers_image_ref_name** | **str** | Name of the reference for a target. | [optional] 
**org_opencontainers_image_revision** | **str** | Source control revision identifier for the packaged software. | [optional] 
**org_opencontainers_image_source** | **str** | URL to get source code for building the image. | [optional] 
**org_opencontainers_image_title** | **str** | Human-readable title of the image | [optional] 
**org_opencontainers_image_url** | **str** | URL to find more information on the image. | [optional] 
**org_opencontainers_image_vendor** | **str** | Name of the distributing entity, organization or individual. | [optional] 
**org_opencontainers_image_version** | **str** | Version of the packaged software. The version MAY match a label or tag in the source code repository, may also be Semantic versioning-compatible | [optional] 

## Example

```python
from openapi_client.models.annotations import Annotations

# TODO update the JSON string below
json = "{}"
# create an instance of Annotations from a JSON string
annotations_instance = Annotations.from_json(json)
# print the JSON string representation of the object
print(Annotations.to_json())

# convert the object into a dict
annotations_dict = annotations_instance.to_dict()
# create an instance of Annotations from a dict
annotations_from_dict = Annotations.from_dict(annotations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


