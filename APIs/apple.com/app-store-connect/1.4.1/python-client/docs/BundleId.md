# BundleId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BundleIdAttributes**](BundleIdAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**BundleIdRelationships**](BundleIdRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.bundle_id import BundleId

# TODO update the JSON string below
json = "{}"
# create an instance of BundleId from a JSON string
bundle_id_instance = BundleId.from_json(json)
# print the JSON string representation of the object
print(BundleId.to_json())

# convert the object into a dict
bundle_id_dict = bundle_id_instance.to_dict()
# create an instance of BundleId from a dict
bundle_id_from_dict = BundleId.from_dict(bundle_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


