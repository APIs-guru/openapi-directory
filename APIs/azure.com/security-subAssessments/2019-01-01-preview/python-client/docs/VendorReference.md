# VendorReference

Vendor reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | Link url | [optional] [readonly] 
**title** | **str** | Link title | [optional] [readonly] 

## Example

```python
from openapi_client.models.vendor_reference import VendorReference

# TODO update the JSON string below
json = "{}"
# create an instance of VendorReference from a JSON string
vendor_reference_instance = VendorReference.from_json(json)
# print the JSON string representation of the object
print(VendorReference.to_json())

# convert the object into a dict
vendor_reference_dict = vendor_reference_instance.to_dict()
# create an instance of VendorReference from a dict
vendor_reference_from_dict = VendorReference.from_dict(vendor_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


