# BundleIdResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppAttributes**](AppAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppRelationships**](AppRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_id_response_included_inner import BundleIdResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdResponseIncludedInner from a JSON string
bundle_id_response_included_inner_instance = BundleIdResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(BundleIdResponseIncludedInner.to_json())

# convert the object into a dict
bundle_id_response_included_inner_dict = bundle_id_response_included_inner_instance.to_dict()
# create an instance of BundleIdResponseIncludedInner from a dict
bundle_id_response_included_inner_from_dict = BundleIdResponseIncludedInner.from_dict(bundle_id_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


