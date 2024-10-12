# BundleIdCapabilityAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capability_type** | [**CapabilityType**](CapabilityType.md) |  | [optional] 
**settings** | [**List[CapabilitySetting]**](CapabilitySetting.md) |  | [optional] 

## Example

```python
from openapi_client.models.bundle_id_capability_attributes import BundleIdCapabilityAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapabilityAttributes from a JSON string
bundle_id_capability_attributes_instance = BundleIdCapabilityAttributes.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapabilityAttributes.to_json())

# convert the object into a dict
bundle_id_capability_attributes_dict = bundle_id_capability_attributes_instance.to_dict()
# create an instance of BundleIdCapabilityAttributes from a dict
bundle_id_capability_attributes_from_dict = BundleIdCapabilityAttributes.from_dict(bundle_id_capability_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


