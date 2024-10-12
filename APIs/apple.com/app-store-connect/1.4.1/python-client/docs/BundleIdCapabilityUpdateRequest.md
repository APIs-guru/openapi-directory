# BundleIdCapabilityUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleIdCapabilityUpdateRequestData**](BundleIdCapabilityUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.bundle_id_capability_update_request import BundleIdCapabilityUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapabilityUpdateRequest from a JSON string
bundle_id_capability_update_request_instance = BundleIdCapabilityUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapabilityUpdateRequest.to_json())

# convert the object into a dict
bundle_id_capability_update_request_dict = bundle_id_capability_update_request_instance.to_dict()
# create an instance of BundleIdCapabilityUpdateRequest from a dict
bundle_id_capability_update_request_from_dict = BundleIdCapabilityUpdateRequest.from_dict(bundle_id_capability_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


