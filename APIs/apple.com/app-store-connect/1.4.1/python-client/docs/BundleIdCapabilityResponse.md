# BundleIdCapabilityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleIdCapability**](BundleIdCapability.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.bundle_id_capability_response import BundleIdCapabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapabilityResponse from a JSON string
bundle_id_capability_response_instance = BundleIdCapabilityResponse.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapabilityResponse.to_json())

# convert the object into a dict
bundle_id_capability_response_dict = bundle_id_capability_response_instance.to_dict()
# create an instance of BundleIdCapabilityResponse from a dict
bundle_id_capability_response_from_dict = BundleIdCapabilityResponse.from_dict(bundle_id_capability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


