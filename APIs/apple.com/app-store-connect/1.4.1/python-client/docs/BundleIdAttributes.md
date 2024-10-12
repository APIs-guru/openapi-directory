# BundleIdAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**platform** | [**BundleIdPlatform**](BundleIdPlatform.md) |  | [optional] 
**seed_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bundle_id_attributes import BundleIdAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdAttributes from a JSON string
bundle_id_attributes_instance = BundleIdAttributes.from_json(json)
# print the JSON string representation of the object
print(BundleIdAttributes.to_json())

# convert the object into a dict
bundle_id_attributes_dict = bundle_id_attributes_instance.to_dict()
# create an instance of BundleIdAttributes from a dict
bundle_id_attributes_from_dict = BundleIdAttributes.from_dict(bundle_id_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


