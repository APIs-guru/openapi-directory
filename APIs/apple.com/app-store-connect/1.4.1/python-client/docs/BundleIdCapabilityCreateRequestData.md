# BundleIdCapabilityCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BundleIdCapabilityCreateRequestDataAttributes**](BundleIdCapabilityCreateRequestDataAttributes.md) |  | 
**relationships** | [**BundleIdCapabilityCreateRequestDataRelationships**](BundleIdCapabilityCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_id_capability_create_request_data import BundleIdCapabilityCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCapabilityCreateRequestData from a JSON string
bundle_id_capability_create_request_data_instance = BundleIdCapabilityCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BundleIdCapabilityCreateRequestData.to_json())

# convert the object into a dict
bundle_id_capability_create_request_data_dict = bundle_id_capability_create_request_data_instance.to_dict()
# create an instance of BundleIdCapabilityCreateRequestData from a dict
bundle_id_capability_create_request_data_from_dict = BundleIdCapabilityCreateRequestData.from_dict(bundle_id_capability_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


