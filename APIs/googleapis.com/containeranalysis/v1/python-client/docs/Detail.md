# Detail

A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_cpe_uri** | **str** | Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects. | [optional] 
**affected_package** | **str** | Required. The package this vulnerability affects. | [optional] 
**affected_version_end** | [**Version**](Version.md) |  | [optional] 
**affected_version_start** | [**Version**](Version.md) |  | [optional] 
**description** | **str** | A vendor-specific description of this vulnerability. | [optional] 
**fixed_cpe_uri** | **str** | The distro recommended [CPE URI](https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri. | [optional] 
**fixed_package** | **str** | The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package. | [optional] 
**fixed_version** | [**Version**](Version.md) |  | [optional] 
**is_obsolete** | **bool** | Whether this detail is obsolete. Occurrences are expected not to point to obsolete details. | [optional] 
**package_type** | **str** | The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.). | [optional] 
**severity_name** | **str** | The distro assigned severity of this vulnerability. | [optional] 
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


