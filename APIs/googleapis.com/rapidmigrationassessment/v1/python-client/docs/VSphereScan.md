# VSphereScan

Message describing a MC Source of type VSphere Scan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_source** | **str** | reference to the corresponding VSphere Scan in MC Source. | [optional] 

## Example

```python
from openapi_client.models.v_sphere_scan import VSphereScan

# TODO update the JSON string below
json = "{}"
# create an instance of VSphereScan from a JSON string
v_sphere_scan_instance = VSphereScan.from_json(json)
# print the JSON string representation of the object
print(VSphereScan.to_json())

# convert the object into a dict
v_sphere_scan_dict = v_sphere_scan_instance.to_dict()
# create an instance of VSphereScan from a dict
v_sphere_scan_from_dict = VSphereScan.from_dict(v_sphere_scan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


