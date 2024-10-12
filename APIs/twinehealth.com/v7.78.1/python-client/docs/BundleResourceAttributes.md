# BundleResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thread** | **str** |  | [optional] 
**effective_from** | **str** |  | 
**effective_to** | **str** |  | [optional] 
**title** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_resource_attributes import BundleResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BundleResourceAttributes from a JSON string
bundle_resource_attributes_instance = BundleResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(BundleResourceAttributes.to_json())

# convert the object into a dict
bundle_resource_attributes_dict = bundle_resource_attributes_instance.to_dict()
# create an instance of BundleResourceAttributes from a dict
bundle_resource_attributes_from_dict = BundleResourceAttributes.from_dict(bundle_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


