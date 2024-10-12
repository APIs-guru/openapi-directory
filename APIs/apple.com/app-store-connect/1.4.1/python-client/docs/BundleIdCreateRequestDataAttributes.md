# BundleIdCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **str** |  | 
**name** | **str** |  | 
**platform** | [**BundleIdPlatform**](BundleIdPlatform.md) |  | 
**seed_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bundle_id_create_request_data_attributes import BundleIdCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdCreateRequestDataAttributes from a JSON string
bundle_id_create_request_data_attributes_instance = BundleIdCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(BundleIdCreateRequestDataAttributes.to_json())

# convert the object into a dict
bundle_id_create_request_data_attributes_dict = bundle_id_create_request_data_attributes_instance.to_dict()
# create an instance of BundleIdCreateRequestDataAttributes from a dict
bundle_id_create_request_data_attributes_from_dict = BundleIdCreateRequestDataAttributes.from_dict(bundle_id_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


