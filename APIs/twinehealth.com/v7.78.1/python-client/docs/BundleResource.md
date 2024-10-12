# BundleResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BundleResourceAttributes**](BundleResourceAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**BundleResourceRelationships**](BundleResourceRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_resource import BundleResource

# TODO update the JSON string below
json = "{}"
# create an instance of BundleResource from a JSON string
bundle_resource_instance = BundleResource.from_json(json)
# print the JSON string representation of the object
print(BundleResource.to_json())

# convert the object into a dict
bundle_resource_dict = bundle_resource_instance.to_dict()
# create an instance of BundleResource from a dict
bundle_resource_from_dict = BundleResource.from_dict(bundle_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


