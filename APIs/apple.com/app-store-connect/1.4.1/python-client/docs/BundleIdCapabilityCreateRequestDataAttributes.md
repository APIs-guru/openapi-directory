# BundleIdCapabilityCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capability_type** | [**CapabilityType**](CapabilityType.md) |  | 
**settings** | [**List[CapabilitySetting]**](CapabilitySetting.md) |  | [optional] 

## Example

```python
from openapi_client.models.bundle_id_capability_create_request_data_attributes import BundleIdCapabilityCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapabilityCreateRequestDataAttributes from a JSON string
bundle_id_capability_create_request_data_attributes_instance = BundleIdCapabilityCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapabilityCreateRequestDataAttributes.to_json())

# convert the object into a dict
bundle_id_capability_create_request_data_attributes_dict = bundle_id_capability_create_request_data_attributes_instance.to_dict()
# create an instance of BundleIdCapabilityCreateRequestDataAttributes from a dict
bundle_id_capability_create_request_data_attributes_from_dict = BundleIdCapabilityCreateRequestDataAttributes.from_dict(bundle_id_capability_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


