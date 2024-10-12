# BundleIdCapabilityUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BundleIdCapabilityAttributes**](BundleIdCapabilityAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_id_capability_update_request_data import BundleIdCapabilityUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapabilityUpdateRequestData from a JSON string
bundle_id_capability_update_request_data_instance = BundleIdCapabilityUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapabilityUpdateRequestData.to_json())

# convert the object into a dict
bundle_id_capability_update_request_data_dict = bundle_id_capability_update_request_data_instance.to_dict()
# create an instance of BundleIdCapabilityUpdateRequestData from a dict
bundle_id_capability_update_request_data_from_dict = BundleIdCapabilityUpdateRequestData.from_dict(bundle_id_capability_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


