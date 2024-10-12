# Detail

Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpe_uri** | **str** | Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar. | [optional] 
**description** | **str** | A vendor-specific description of this note. | [optional] 
**fixed_location** | [**VulnerabilityLocation**](VulnerabilityLocation.md) |  | [optional] 
**is_obsolete** | **bool** | Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. | [optional] 
**max_affected_version** | [**Version**](Version.md) |  | [optional] 
**min_affected_version** | [**Version**](Version.md) |  | [optional] 
**package** | **str** | Required. The name of the package where the vulnerability was found. | [optional] 
**package_type** | **str** | The type of package; whether native or non native(ruby gems, node.js packages etc). | [optional] 
**severity_name** | **str** | The severity (eg: distro assigned severity) for this vulnerability. | [optional] 
**source** | **str** | The source from which the information in this Detail was obtained. | [optional] 
**source_update_time** | **str** | The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker. | [optional] 
**vendor** | **str** | The name of the vendor of the product. | [optional] 

## Example

```python
from openapi_client.models.detail import Detail

# TODO update the JSON string below
json = "{}"
# create an instance of Detail from a JSON string
detail_instance = Detail.from_json(json)
# print the JSON string representation of the object
print(Detail.to_json())

# convert the object into a dict
detail_dict = detail_instance.to_dict()
# create an instance of Detail from a dict
detail_from_dict = Detail.from_dict(detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


