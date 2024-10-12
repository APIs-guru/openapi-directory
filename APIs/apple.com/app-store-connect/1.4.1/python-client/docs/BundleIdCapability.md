# BundleIdCapability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BundleIdCapabilityAttributes**](BundleIdCapabilityAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_id_capability import BundleIdCapability

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapability from a JSON string
bundle_id_capability_instance = BundleIdCapability.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapability.to_json())

# convert the object into a dict
bundle_id_capability_dict = bundle_id_capability_instance.to_dict()
# create an instance of BundleIdCapability from a dict
bundle_id_capability_from_dict = BundleIdCapability.from_dict(bundle_id_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


