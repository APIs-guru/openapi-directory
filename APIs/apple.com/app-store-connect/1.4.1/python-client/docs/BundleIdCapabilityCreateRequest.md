# BundleIdCapabilityCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleIdCapabilityCreateRequestData**](BundleIdCapabilityCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.bundle_id_capability_create_request import BundleIdCapabilityCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapabilityCreateRequest from a JSON string
bundle_id_capability_create_request_instance = BundleIdCapabilityCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapabilityCreateRequest.to_json())

# convert the object into a dict
bundle_id_capability_create_request_dict = bundle_id_capability_create_request_instance.to_dict()
# create an instance of BundleIdCapabilityCreateRequest from a dict
bundle_id_capability_create_request_from_dict = BundleIdCapabilityCreateRequest.from_dict(bundle_id_capability_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


